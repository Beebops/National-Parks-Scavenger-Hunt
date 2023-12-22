const express = require('express')
const router = express.Router()

module.exports = (userService) => {
  router.get('/', async (req, res) => {
    try {
      const users = await userService.getUsers()
      res.send(users)
    } catch (err) {
      return next(err)
    }
  })

  return router
}
