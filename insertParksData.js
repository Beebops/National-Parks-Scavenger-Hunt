require('dotenv').config({ path: './.env.development' })
const pool = require('./db')
const axios = require('axios')

const BASE_URL = `https://developer.nps.gov/api/v1/parks?limit=500`
const headers = {
  'X-Api-Key': process.env.NP_API_KEY,
  'Content-Type': 'application/json',
}
const requestOptions = {
  headers: headers,
}

async function getParksData() {
  // returns an array of park objects { parkId, parkName, parkState, parkDescription, parkImage, parkUrl }
  try {
    const response = await axios.get(BASE_URL, requestOptions)
    const parksData = response.data.data

    const parks = parksData
      .filter(
        (park) =>
          park.designation === 'National Park' ||
          park.designation === 'National Park & Preserve'
      )

      .map((park) => ({
        parkId: park.parkCode,
        parkName: park.fullName,
        parkStates: park.states,
        parkDescription: park.description,
        parkImage: park.images.length > 0 ? park.images[0].url : null,
        parkUrl: park.url,
      }))
    return parks
  } catch (err) {
    console.error(err)
  }
}

async function insertParksData() {
  const client = await pool.connect()
  const parksData = await getParksData()

  try {
    for (const park of parksData) {
      const query = `INSERT INTO parks
      (park_id, park_name, park_state, park_description, park_image, park_url )
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (park_id) DO NOTHING;;`
      const values = [
        park.parkId,
        park.parkName,
        park.parkStates,
        park.parkDescription,
        park.parkImage,
        park.parkUrl,
      ]
      await client.query(query, values)
    }
  } catch (err) {
    console.error('Error during park insertion', err)
  } finally {
    client.release()
  }
}

;(async () => {
  try {
    await insertParksData()
    console.log('Data insertion complete')
  } catch (err) {
    console.error('Error during data insertion', err)
  }
})()
