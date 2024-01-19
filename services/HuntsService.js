const { TokenExpiredError } = require('jsonwebtoken')
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
    const result = await pool.query(
      `SELECT h.*, p.park_image FROM hunts h JOIN parks p ON h.park_id = p.park_id WHERE h.user_id = $1`,
      [userId]
    )
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

  async updateHunt(huntId, { huntTitle, isComplete, newSpeciesIds = [] }) {
    // update hunt details if provided
    const updates = []
    const values = []
    let valueIndex = 1

    if (huntTitle !== undefined) {
      updates.push(`hunt_title = $${valueIndex}`)
      values.push(huntTitle)
      valueIndex++
    }

    if (isComplete !== undefined) {
      updates.push(`is_complete = $${valueIndex}`)
      values.push(isComplete)
      valueIndex++
    }

    if (updates.length === 0 && newSpeciesIds.length === 0) {
      throw new ExpressError('No updates provided', 400)
    }

    try {
      if (updates.length > 0) {
        await pool.query(
          `UPDATE hunts SET ${updates.join(
            ', '
          )} WHERE hunt_id = $${valueIndex} RETURNING *`,
          [...values, huntId]
        )
      }

      // add new species to hunt
      for (const speciesId of newSpeciesIds) {
        await this.addSpeciesToHunt(huntId, speciesId)
      }
      return this.getHuntById(huntId)
    } catch (err) {
      if (err instanceof ExpressError) {
        throw err
      } else {
        throw new ExpressError('Error updating hunt', 500)
      }
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

  async addSpeciesToHunt(huntId, speciesId) {
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

  async markSpeciesFound(huntId, speciesId) {
    try {
      const updateQuery = `
      UPDATE hunts_species
      SET isFound = TRUE
      WHERE hunt_id = $1 AND species_id = $2`

      const values = [huntId, speciesId]
      const result = await pool.query(updateQuery, values)

      if (result.rowCount === 0) {
        throw new ExpressError('No matching hunt and species found', 404)
      }
    } catch (err) {
      console.error('Error marking species as found:', err)
      throw new ExpressError('Error marking species as found', 500)
    }
  }

  async removeSpeciesFromHunt(huntId, speciesId) {
    try {
      const result = await pool.query(
        `DELETE FROM hunts_species WHERE hunt_id = $1 AND species_id = $2`,
        [huntId, speciesId]
      )
      if (result.rowCount === 0)
        throw new ExpressError('Species not found in this hunt', 404)
      return 'Species successfully removed from hunt'
    } catch (err) {
      throw new ExpressError('Error removing species from hunt', 500)
    }
  }

  async getHuntDetails(huntId) {
    // returns a hunt object {huntTitle, isComplete, dateStarted, dateCompleted, animalSpeciesList, parkImage}
    try {
      // get hunt and park information
      const huntResult = await pool.query(
        `SELECT h.*, p.park_image FROM hunts h JOIN parks p ON h.park_id = p.park_id WHERE h.hunt_id = $1`,
        [huntId]
      )
      if (huntResult.rows.length === 0)
        throw new ExpressError('Hunt not found', 404)
      const hunt = huntResult.rows[0]
      // get species associated with hunt
      const speciesResult = await pool.query(
        `SELECT s.* FROM species s JOIN hunts_species hs ON s.species_id = hs.species_id WHERE hs.hunt_id = $1`,
        [huntId]
      )
      hunt.speciesList = speciesResult.rows
      return hunt
    } catch (err) {}
  }
}

module.exports = HuntsService
