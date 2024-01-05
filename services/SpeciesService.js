const pool = require('../db')
const ExpressError = require('../expressError')

class SpeciesService {
  async getSpeciesByCategoryAndPark(parkId, category) {
    try {
      const query = `SELECT * FROM species WHERE park_id = $1 AND category = $2`
      const values = [parkId, category]
      const result = await pool.query(query, values)
      return result.rows
    } catch (err) {
      console.error('Error fetching species', err)
      throw new ExpressError('Error fetching species by category and park', 500)
    }
  }

  async listMammals(parkId) {
    return this.getSpeciesByCategoryAndPark(parkId, 'Mammal')
  }

  async listBirds(parkId) {
    return this.getSpeciesByCategoryAndPark(parkId, 'Bird')
  }

  async listReptiles(parkId) {
    return this.getSpeciesByCategoryAndPark(parkId, 'Reptile')
  }

  async listFish(parkId) {
    return this.getSpeciesByCategoryAndPark(parkId, 'Fish')
  }

  async listAmphibians(parkId) {
    return this.getSpeciesByCategoryAndPark(parkId, 'Amphibian')
  }

  async getSpeciesById(speciesId) {
    try {
      const query = `SELECT * FROM species WHERE species_id = $1`
      const values = [speciesId]
      const result = await pool.query(query, values)

      if (result.rows.length === 0) {
        throw new ExpressError('Species not found', 404)
      }
      return result.rows[0]
    } catch (err) {
      console.error('Error fetching species')
      throw err instanceof ExpressError
        ? err
        : new ExpressError('Internal Server Error', 500)
    }
  }
}

module.exports = SpeciesService
