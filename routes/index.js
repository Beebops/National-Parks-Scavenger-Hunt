const express = require('express')
const router = express.Router()

const huntsRoute = require('./hunts')
const usersRoute = require('./users')
const parksRoute = require('./parks')

module.exports = (params) => {
  router.get('/', (req, res) => {
    res.send('National Park Home Page')
  })

  router.use('/hunts', huntsRoute(params.huntsService))
  router.use('/users', usersRoute(params.userService))
  router.use('/parks', parksRoute(params.parkService))

  return router
}
