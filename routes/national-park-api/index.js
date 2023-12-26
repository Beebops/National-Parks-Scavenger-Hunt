const express = require('express')
const router = express.Router()

module.exports = (nationalParkAPIService) => {
  router.get('/', async (req, res) => {
    try {
      const allParks = await nationalParkAPIService.getAllParks()
      res.send(allParks)
    } catch (err) {
      return next(err)
    }
  })

  return router
}
