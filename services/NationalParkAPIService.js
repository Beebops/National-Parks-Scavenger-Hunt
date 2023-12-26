//const pool = require('../db')
const axios = require('axios')

class NationalParkAPIService {
  constructor() {
    this.NP_API_KEY = process.env.NP_API_KEY
    this.BASE_URL = 'https://developer.nps.gov/api/v1/parks?limit=471'
    this.headers = {
      'X-Api-Key': this.NP_API_KEY,
      'Content-Type': 'application/json',
    }
    this.requestOptions = {
      headers: this.headers,
    }
  }
  async getAllParks() {
    try {
      const response = await axios.get(`${this.BASE_URL}`, this.requestOptions)
      const parksData = response.data.data

      const parks = parksData
        .filter((park) => park.designation === 'National Park')
        .map((park) => ({
          parkId: park.parkCode,
          parkName: park.fullName,
          parkStates: park.states,
          parkDescription: park.description,
          parkImage: park.images.length > 0 ? park.images[0].url : null,
        }))

      return parks
    } catch (e) {
      console.error(e)
      return []
    }
  }
}

module.exports = NationalParkAPIService
//return 'NationalParkAPIService: Getting all National Parks by state'
