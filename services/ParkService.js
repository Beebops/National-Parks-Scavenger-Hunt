const pool = require('../db')
const ExpressError = require('../expressError')

class ParkService {
  async getParksByState(stateCode) {
    try {
      const query = `
        SELECT * FROM parks
        WHERE park_state = $1 OR park_state LIKE $2 OR park_state LIKE $3 OR park_state LIKE $4;
      `
      const values = [
        stateCode,
        `${stateCode},%`,
        `%,${stateCode}`,
        `%,${stateCode},%`,
      ]
      const result = await pool.query(query, values)
      return result.rows
    } catch (err) {
      console.error('Error fetching parks by state:', err)
      throw new ExpressError('Error fetching parks by state', 500)
    }
  }
}

module.exports = ParkService
