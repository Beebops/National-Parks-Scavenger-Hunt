const express = require('express')
const router = express.Router()
const speciesRoutes = require('./species')

module.exports = (parkService, speciesService) => {
  router.get('/', async (req, res, next) => {
    try {
      const stateCode = req.query.state
      const parks = await parkService.getParksByState(stateCode)
      res.json(parks)
    } catch (err) {
      return next(err)
    }
  })

  router.use('/:parkId/species', speciesRoutes(speciesService))

  return router
}
