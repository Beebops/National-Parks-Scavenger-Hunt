require('dotenv').config({ path: './.env.development' })
const axios = require('axios')

GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
GOOGLE_BASE_URL = `https://kgsearch.googleapis.com/v1/entities:search?indent=true&limit=1&key=`

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
      commonNames: item.CommonNames,
      category: item.Category,
    }))
  } catch (e) {
    console.error(e)
    return []
  }
}

async function getSpeciesGoogleKGData(species) {
  try {
    const response = await axios.get(
      `${GOOGLE_BASE_URL}${GOOGLE_API_KEY}&query=${encodeURIComponent(species)}`
    )

    if (
      !response.data ||
      !response.data.itemListElement ||
      !response.data.itemListElement[0]
    ) {
      console.log(`No data found for species: ${species}`)
      return { imageUrl: '', description: '', wikiLink: '' }
    }

    const result = response.data.itemListElement[0].result

    if (!result || !result.image || !result.detailedDescription) {
      console.log(`Incomplete data for species: ${species}`)
      return { imageUrl: '', description: '', wikiLink: '' }
    }

    const imageUrl = result.image.contentUrl || ''
    const description = result.detailedDescription.articleBody || ''
    const wikiLink = result.detailedDescription.url || ''

    return { imageUrl, description, wikiLink }
  } catch (e) {
    console.error(`Error in getSpeciesGoogleKGData for species ${species}:`, e)
    return { imageUrl: '', description: '', wikiLink: '' }
  }
}

async function combineSpeciesData(parkCode, category) {
  try {
    let combinedSpeciesDataArray = []
    let speciesArray = await getSpeciesIRMAData(parkCode, category)

    for (let species of speciesArray) {
      try {
        let googleData = await getSpeciesGoogleKGData(species.scientificName)
        let combinedSpeciesData = {
          scientific_name: species.scientificName,
          common_names: species.commonNames,
          category: species.category,
          image_url: googleData.imageUrl || '',
          description: googleData.description || '',
          wiki_link: googleData.wikiLink || '',
        }

        combinedSpeciesDataArray.push(combinedSpeciesData)
      } catch (innerError) {
        console.error(
          `Error processing species ${species.scientificName}:`,
          innerError
        )
      }
    }
    return combinedSpeciesDataArray
  } catch (outerError) {
    console.error(outerError)
    return []
  }
}

module.exports = combineSpeciesData
