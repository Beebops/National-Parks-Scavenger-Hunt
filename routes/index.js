const express = require('express')
const router = express.Router()

const usersRoute = require('./users')
const parksRoute = require('./parks')

module.exports = (params) => {
  router.get('/', (req, res) => {
    res.send('National Park Home Page')
  })

  router.use('/users', usersRoute(params.userService, params.huntsService))
  router.use('/parks', parksRoute(params.parkService))

  return router
}
