const express = require('express')
const router = express.Router()
const speciesRoutes = require('./species')
//const SpeciesService = require('../../services/SpeciesService')

module.exports = (parkService) => {
  router.get('/', async (req, res) => {
    try {
      const allParks = await parkService.getAllParks()
      res.send(allParks)
    } catch (err) {
      return next(err)
    }
  })

  router.use('./:parkId/species', speciesRoutes(SpeciesService))

  return router
}
