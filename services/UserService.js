const pool = require('../db')

class UserService {
  async getUsers() {
    return `UserService: Getting all Users from Database`
  }
}

module.exports = UserService
