const express = require('express')
const router = express.Router()

module.exports = (huntsService) => {
  router.get('/', async (req, res) => {
    try {
      const hunts = await huntsService.getHunts()
      res.send(hunts)
    } catch (err) {
      return next(err)
    }
  })

  return router
}
