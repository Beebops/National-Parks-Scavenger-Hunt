const express = require('express')
const router = express.Router()

module.exports = (speciesService) => {
  router.get('/:speciesId', async (req, res, next) => {
    try {
      const speciesId = req.params.speciesId
      const species = await speciesService.getSpeciesById(speciesId)
      res.json(species)
    } catch (err) {
      next(err)
    }
  })

  return router
}
