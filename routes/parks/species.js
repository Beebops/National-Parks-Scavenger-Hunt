const express = require('express')
const router = express.Router({ mergeParams: true })

module.exports = (speciesService) => {
  router.get('/', async (req, res, next) => {
    try {
      const parkId = req.params.parkId
      const speciesInPark = await speciesService.getSpeciesByCategoryAndPark(
        parkId,
        'Mammal'
      )

      res.json(speciesInPark)
    } catch (err) {
      next(err)
    }
  })

  router.get('/mammals', async (req, res) => {
    try {
      const parkId = req.params.parkId
      const speciesList = await speciesService.listMammals(parkId)
      res.json(speciesList)
    } catch (err) {
      next(err)
    }
  })

  router.get('/birds', async (req, res) => {
    try {
      const parkId = req.params.parkId
      const speciesList = await speciesService.listBirds(parkId)
      res.json(speciesList)
    } catch (err) {
      next(err)
    }
  })

  router.get('/reptiles', async (req, res) => {
    try {
      const parkId = req.params.parkId
      const speciesList = await speciesService.listReptiles(parkId)
      res.json(speciesList)
    } catch (err) {
      next(err)
    }
  })

  router.get('/amphibians', async (req, res) => {
    try {
      const parkId = req.params.parkId
      const speciesList = await speciesService.listAmphibians(parkId)
      res.json(speciesList)
    } catch (err) {
      next(err)
    }
  })

  router.get('/fish', async (req, res) => {
    try {
      const parkId = req.params.parkId
      const speciesList = await speciesService.listFish(parkId)
      res.json(speciesList)
    } catch (err) {
      next(err)
    }
  })

  return router
}
