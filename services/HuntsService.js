const pool = require('../db')

class HuntsService {
  constructor() {}
  async getHunts() {
    return 'HuntsService: Getting all Scavenger Hunts from Database'
  }
}

module.exports = HuntsService
