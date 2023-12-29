require('dotenv').config({ path: './.env.development' })
const axios = require('axios')

GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
GOOGLE_BASE_URL = `https://kgsearch.googleapis.com/v1/entities:search?indent=true&limit=1&key=`
IRM_BASE_URL = 'https://irmaservices.nps.gov/v3/rest/npspecies/fulllist/'

async function getSpeciesIRMAData(parkCode, category) {
  // return a partial species obj { scientificName, commonNames }
  try {
    const response = await axios.get(`${IRM_BASE_URL}/${parkCode}/${category}`)
    const speciesData = response.data
    const allSpeciesByCategory = speciesData.map((species) => ({
      scientificName: species.ScientificName,
      commonNames: species.CommonNames,
    }))

    return allSpeciesByCategory
  } catch (e) {
    console.error(e)
    return {}
  }
}

async function getSpeciesGoogleKGData(species) {
  try {
    const response = await axios.get(
      `${GOOGLE_BASE_URL}${GOOGLE_API_KEY}&query=${species}`
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

    const imageUrl = result.image.url || ''
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
        let googleData = await getSpeciesGoogleKGData(species.commonNames)
        let combinedSpeciesData = {
          scientific_name: species.scientificName,
          common_names: species.commonNames,
          image_url: googleData.imageUrl,
          description: googleData.description,
          wiki_link: googleData.wikiLink,
        }

        combinedSpeciesDataArray.push(combinedSpeciesData)
      } catch (innerError) {
        console.error(
          `Error processing species ${species.scientificName}:`,
          innerError
        )
      }
    }
    console.log(combinedSpeciesDataArray)
    return combinedSpeciesDataArray
  } catch (outerError) {
    console.error(outerError)
    return []
  }
}

combineSpeciesData('zion', 'reptiles')
