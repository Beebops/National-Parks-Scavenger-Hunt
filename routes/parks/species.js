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
      console.log(parkId)
      res.json(speciesInPark)
    } catch (err) {
      next(err)
    }
  })

  return router
}
