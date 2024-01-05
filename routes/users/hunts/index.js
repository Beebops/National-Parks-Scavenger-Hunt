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
    const huntId = req.params.huntId
    try {
      const message = await huntsService.deleteHunt(huntId)
      res.status(200).json({ message })
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

  // Get a single hunt with all information
  router.get('/:huntId', async (req, res, next) => {
    try {
      const huntId = req.params.huntId
      const huntDetails = await huntsService.getHuntDetails(huntId)

      res.json(huntDetails)
    } catch (err) {
      next(err)
    }
  })

  // Update an existing hunt
  router.put('/:huntId', async (req, res, next) => {
    try {
      const { huntId } = req.params
      const updateData = req.body // Contains huntTitle, isComplete, and newSpeciesIds
      const updatedHunt = await huntsService.updateHunt(huntId, updateData)
      res.status(200).json(updatedHunt)
    } catch (err) {
      next(err)
    }
  })

  // Add a species to an existing hunt
  router.post('/:huntId/species', async (req, res, next) => {
    try {
      const { huntId } = req.params
      const { speciesId } = req.body
      await huntsService.addSpeciesToHunt(huntId, speciesId)
      res.status(200).json({ message: 'Species successfully added' })
    } catch (err) {
      next(err)
    }
  })

  // Remove a species from an existing hunt
  router.delete('/:huntId/species', async (req, res, next) => {
    try {
      const huntId = req.params.huntId
      const { speciesId } = req.body
      await huntsService.removeSpeciesFromHunt(huntId, speciesId)
      res.status(200).json({ message: 'Species successfully removed' })
    } catch (err) {
      next(err)
    }
  })

  return router
}
