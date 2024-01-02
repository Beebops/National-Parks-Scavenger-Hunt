const express = require('express')
const router = express.Router({ mergeParams: true })

module.exports = (huntsService) => {
  // Create a new hunt
  router.post('/', async (req, res, next) => {
    try {
      const newHunt = await huntsService.createHunt(req.params.userId, req.body)
      res.status(201).json(newHunt)
    } catch (err) {
      next(err)
    }
  })

  // Delete a hunt
  router.delete('/:huntId', async (req, res, next) => {
    try {
      await huntsService.deleteHunt(huntId)
      res.status(204).send()
    } catch (err) {
      next(err)
    }
  })

  // Get all hunts for a given user
  router.get('/', async (req, res, next) => {
    try {
      const hunts = await huntsService.getHuntsByUser(req.params.userId)
      res.json(hunts)
    } catch (err) {
      next(err)
    }
  })

  // Get a single hunt
  router.get('/:huntId', async (req, res, next) => {
    try {
      const huntId = req.params.huntId
      const hunt = await huntsService.getHuntById(huntId)
      res.json(hunt)
    } catch (err) {
      next(err)
    }
  })

  return router
}
