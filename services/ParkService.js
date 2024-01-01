const pool = require('../db')
const ExpressError = require('../expressError')

class ParkService {
  getAllParks() {
    return 'Retrieving all parks from database'
  }
}

module.exports = ParkService
