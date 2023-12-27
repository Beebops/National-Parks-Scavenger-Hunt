require('dotenv').config({ path: './.env.development' })
const animalCategories = require('./animalsCategories')
const parkCodes = require('./parkCodes')
const axios = require('axios')

GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
BASE_URL = `https://kgsearch.googleapis.com/v1/entities:search?indent=true&limit=1&key=`
IRM_BASE_URL = 'https://irmaservices.nps.gov/v3/rest/npspecies/fulllist/'

async function getSpeciesGoogleKGData(species) {
  // return a partial species obj { description, imageUrl, wikiLink}

  try {
    const response = await axios.get(
      `${BASE_URL}${GOOGLE_API_KEY}&query=${species}`
    )
    const {
      image: { url: imageUrl },
      detailedDescription: { articleBody: description, url: wikiLink },
    } = response.data.itemListElement[0].result

    return { imageUrl, description, wikiLink }
  } catch (e) {
    console.error(e)
    return {}
  }
}

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

//getSpeciesIRMAData('zion', 'mammals')
//getSpeciesGoogleKGData('bald eagle')
