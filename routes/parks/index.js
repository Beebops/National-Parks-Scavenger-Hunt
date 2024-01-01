const express = require('express')
const router = express.Router()

module.exports = (parkService) => {
  router.get('/', async (req, res) => {
    try {
      const allParks = await parkService.getAllParks()
      res.send(allParks)
    } catch (err) {
      return next(err)
    }
  })

  return router
}
