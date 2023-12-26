require('dotenv').config({ path: './.env.development' })
const { Pool } = require('pg')
const parksData = require('./parks')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
})

const seedParksTable = async () => {
  try {
    await pool.connect()

    for (const park of parksData) {
      const insertQuery = `
      INSERT INTO parks (park_id, park_name, park_state, park_description, park_image)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (park_id) DO NOTHING;`
      await pool.query(insertQuery, [
        park.parkId,
        park.parkName,
        park.parkStates,
        park.parkDescription,
        park.parkImage,
      ])
      console.log('Parks data seeded successfully')
    }
  } catch (e) {
    console.error('Error seeding parks data', e)
  } finally {
    pool.end()
  }
}

seedParksTable()
