require('dotenv').config({ path: './.env.development' })
const pool = require('./db')
const axios = require('axios')
const animalCategories = require('./animalCategories')

async function getSpeciesIRMAData(parkCode, category) {
  try {
    const response = await axios.get(
      `https://irmaservices.nps.gov/v3/rest/npspecies/checklist/${parkCode}/${encodeURIComponent(
        category
      )}`
    )
    const speciesItems = response.data

    return speciesItems.map((item) => ({
      scientificName: item.ScientificName,
    }))
  } catch (e) {
    console.error(e)
    return []
  }
}

async function seedParksSpeciesTable(parkCode, categories) {
  const client = await pool.connect()

  try {
    await client.query('BEGIN') // Start a transaction

    for (const category of categories) {
      const speciesData = await getSpeciesIRMAData(parkCode, category)

      for (const species of speciesData) {
        const res = await client.query(
          'SELECT species_id FROM species WHERE scientific_name = $1',
          [species.scientificName]
        )

        if (res.rows.length > 0) {
          const speciesId = res.rows[0].species_id
          await client.query(
            'INSERT INTO parks_species (park_id, species_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
            [parkCode, speciesId]
          )
        }
      }
    }

    await client.query('COMMIT') // Commit the transaction
  } catch (error) {
    await client.query('ROLLBACK') // Rollback on error
    console.error('Error during seeding:', error)
  } finally {
    client.release()
  }
}

seedParksSpeciesTable('acad', animalCategories)
