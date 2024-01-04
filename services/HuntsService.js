const pool = require('../db')
const ExpressError = require('../expressError')

class HuntsService {
  async createHunt(userId, { parkId, huntTitle, selectedSpeciesIds }) {
    const result = await pool.query(
      `INSERT INTO hunts (user_id, park_id, hunt_title, is_complete, date_started, date_completed)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [userId, parkId, huntTitle, false, new Date(), null]
    )
    const newHuntId = result.rows[0].hunt_id
    if (!newHuntId) throw new ExpressError('Could not create hunt', 400)
    // associate the selected species with the new hunt
    for (const speciesId of selectedSpeciesIds) {
      await pool.query(
        `INSERT INTO hunts_species (hunt_id, species_id) VALUES ($1, $2)`,
        [newHuntId, speciesId]
      )
    }
    return result.rows[0]
  }

  async getHuntsByUser(userId) {
    // returns an array of hunt objects
    const result = await pool.query(`SELECT * FROM hunts WHERE user_id = $1`, [
      userId,
    ])
    if (result.rows.length === 0)
      throw new ExpressError('Scavenger hunts not found', 404)

    return result.rows
  }

  async getHuntById(huntId) {
    // To retrieve a hunt with its associated species, call getHuntById
    try {
      const result = await pool.query(
        `SELECT * FROM hunts WHERE hunt_id = $1`,
        [huntId]
      )
      if (result.rows.length === 0)
        throw new ExpressError('Could not find that scanvenger hunt', 404)

      const speciesResult = await pool.query(
        `SELECT s.* FROM species s
          JOIN hunts_species hs ON s.species_id = hs.species_id
          WHERE hs.hunt_id = $1`,
        [huntId]
      )

      const hunt = result.rows[0]
      hunt.huntSpecies = speciesResult.rows
      return hunt
    } catch (err) {
      if (err instanceof ExpressError) {
        throw err
      } else {
        throw new ExpressError('Error retrieving hunt', 500)
      }
    }
  }

  async updateHunt(huntId, updateData) {
    // returns the updated hunt object {huntTitle, isComplete, dateCompleted, animalSpeciesList}
    const entries = Object.entries(updateData)

    const updates = entries
      .map(([key, value], index) => `${key} = $${index + 1}`)
      .join(', ')

    const values = entries.map(([key, value]) => value)

    if (!updates) throw new ExpressError('No update data provided', 400)

    try {
      const result = await pool.query(
        `UPDATE hunts SET ${updates} WHERE hunt_id = $${
          entries.length + 1
        } RETURNING *`,
        [...values, huntId]
      )
      if (result.rows.length === 0)
        throw new ExpressError('Hunt not found', 404)
      return result.rows[0]
    } catch (err) {
      throw new ExpressError('Error updating hunt', 500)
    }
  }

  async deleteHunt(huntId) {
    // returns a success message or confirmation that hunt was deleted
    const result = await pool.query(
      `DELETE FROM hunts WHERE hunt_id = $1 RETURNING *`,
      [huntId]
    )
    if (result.rowCount === 0) throw new ExpressError('Hunt not found', 404)
    return 'Hunt successfully deleted'
  }

  async addAnimalToHunt(huntId, speciesId) {
    // To add a species to a hunt, call addAnimalToHunt with the appropriate huntId and speciesId
    try {
      const result = await pool.query(
        `INSERT INTO hunts_species (hunt_id, species_id) VALUES ($1, $2)`,
        [huntId, speciesId]
      )
      return result.rows[0]
    } catch (err) {
      if (err.code === '23505') {
        throw new ExpressError('This species is already added to the hunt', 400)
      } else if (err.code === '23503') {
        throw new ExpressError('Invalid hunt or species id', 400)
      } else {
        throw new ExpressError('Error adding species to hunt', 500)
      }
    }
  }

  async removeAnimalFromHunt(huntId, animalSpecies) {
    // returns an updated list of animals in hunt
    // get the animal by using speciesId from hunts_species table
  }

  async getHuntDetails(huntId) {
    // returns a hunt object {huntTitle, isComplete, dateStarted, dateCompleted, animalSpeciesList, parkImage}
  }
}

module.exports = HuntsService
