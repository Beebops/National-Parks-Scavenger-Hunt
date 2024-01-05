require('dotenv').config({ path: './.env.development' })
const combineSpeciesData = require('./combineSpeciesData')
const pool = require('./db')

async function seedSpeciesTable(parkCode, categories) {
  const client = await pool.connect()

  try {
    for (const category of categories) {
      const speciesData = await combineSpeciesData(parkCode, category)

      await client.query('BEGIN')

      for (const species of speciesData) {
        const query = `
          INSERT INTO species (scientific_name, common_name, species_description, species_image, species_wikipedia_link, category)
          VALUES ($1, $2, $3, $4, $5, $6)
          ON CONFLICT (scientific_name) DO NOTHING;
        `
        const values = [
          species.scientific_name,
          species.common_names,
          species.description,
          species.image_url,
          species.wiki_link,
          species.category,
        ]
        await client.query(query, values)
      }

      await client.query('COMMIT') // Commit the transaction
    }
    console.log(`Completed seeding for park: ${parkCode}`)
  } catch (error) {
    console.error('Error during seeding:', error)
    await client.query('ROLLBACK') // Rollback on error
  } finally {
    client.release()
  }
}

// Example usage
const parkCode = 'whsa'
const categories = ['Mammal', 'Bird', 'Reptile', 'Amphibian', 'Fish']
seedSpeciesTable(parkCode, categories)
