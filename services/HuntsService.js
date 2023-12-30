const pool = require('../db')
const ExpressError = require('../expressError')

class HuntsService {
  async createHunt(userId, parkId, huntTitle, selectedSpeciesIds) {
    const result = await pool.query(
      `INSERT INTO hunts (user_id, park_id, hunt_title, is_complete, date_started, date_completed)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING hunt_id`,
      [userId, parkId, huntTitle, false, new Date(), null]
    )
    const newHuntId = result.rows[0].hunt_id
    // associate the selected species with the new hunt
    for (const speciesId of selectedSpeciesIds) {
      await pool.query(
        `INSERT INTO hunts_species (hunt_id, species_id) VALUES ($1, $2)`,
        [newHuntId, speciesId]
      )
    }
    return newHuntId
  }

  async getHuntsByUser(userId) {
    // returns an array of hunt objects

    return `Getting all of ${userId}'s scavenger hunts`
  }

  async getHuntById(huntId) {
    // returns the specific hunt object
  }

  async updateHunt(huntId, huntData) {
    // returns the updated hunt object {huntTitle, isComplete, dateCompleted, animalSpeciesList}
  }

  async deleteHunt(huntId) {
    // returns a success message or confirmation that hunt was deleted
  }

  async addAnimalToHunt(huntId, animalSpecies) {
    // returns an updated list of animals in hunt
  }

  async removeAnimalFromHunt(huntId, animalSpecies) {
    // returns an updated list of animals in hunt
  }

  async getHuntDetails(huntId) {
    // returns a hunt object {huntTitle, isComplete, dateStarted, dateCompleted, animalSpeciesList, parkImage}
  }
}

module.exports = HuntsService
