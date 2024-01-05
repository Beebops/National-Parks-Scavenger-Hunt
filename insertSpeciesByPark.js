require('dotenv').config({ path: './.env.development' })
const pool = require('./db')
const { combineSpeciesData } = require('./combineSpeciesData')

async function insertSpeciesData(parkCode, speciesCategory) {
  const client = await pool.connect()
  const speciesData = await combineSpeciesData(parkCode, speciesCategory)

  try {
    for (const species of speciesData) {
      const query = `INSERT INTO species (scientific_name, common_name, species_image, species_description, species_wikipedia_link)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (scientific_name) DO NOTHING;`
      const values = [
        species.scientific_name,
        species.common_names,
        species.image_url,
        species.description,
        species.wiki_link,
      ]
      await client.query(query, values)
    }
  } catch (err) {
    console.error('Error during species insertion', err)
  } finally {
    client.release()
  }
}

;(async () => {
  try {
    await insertSpeciesData('zion', 'fish')
    console.log('Data insertion complete.')
  } catch (err) {
    'Error during data insertion', err
  }
})()
