require('dotenv').config({ path: './.env.development' })
const pool = require('./db')
const { combineSpeciesData } = require('./combineSpeciesData')

async function insertAnimalData(parkCode, animalCategory) {
  const client = await pool.connect()
  const animalData = await combineSpeciesData(parkCode, animalCategory)

  try {
    for (const animal of animalData) {
      const query = `INSERT INTO species (scientific_name, common_name, species_image, species_description, species_wikipedia_link)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (scientific_name) DO NOTHING;`
      const values = [
        animal.scientific_name,
        animal.common_names,
        animal.image_url,
        animal.description,
        animal.wiki_link,
      ]
      await client.query(query, values)
    }
  } catch (err) {
    console.error('Error during animal insertion', err)
  } finally {
    client.release()
  }
}

;(async () => {
  try {
    await insertAnimalData('acad', 'reptiles')
    console.log('Data insertion complete.')
  } catch (err) {
    'Error during data insertion', err
  }
})()
