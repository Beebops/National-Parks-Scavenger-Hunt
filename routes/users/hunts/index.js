const express = require('express')
const router = express.Router({ mergeParams: true })

module.exports = (huntsService) => {
  // Create a new hunt for given user
  router.post('/', async (req, res, next) => {
    try {
      const newHunt = await huntsService.createHunt(req.params.userId, req.body)
      res.status(201).json(newHunt)
    } catch (err) {
      next(err)
    }
  })

  // Get all hunts for a given user
  router.get('/', async (req, res, next) => {
    try {
      const hunts = await huntsService.getHuntsByUser(req.params.userId)
      return res.send(hunts)
    } catch (err) {
      next(err)
    }
  })

  return router
}
