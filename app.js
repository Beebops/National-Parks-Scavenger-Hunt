const express = require('express')
const ExpressError = require('./expressError')

const app = express()
const routes = require('./routes')

const HuntsService = require('./services/HuntsService')
const UserService = require('./services/UserService')
const ParkService = require('./services/ParkService')

module.exports = (config) => {
  const log = config.log()

  const huntsService = new HuntsService()
  const userService = new UserService()
  const parkService = new ParkService()

  app.use(express.json())

  // Add a request logging middleware in development mode
  if (app.get('env') === 'development') {
    app.use((req, res, next) => {
      log.debug(`${req.method}: ${req.url}`)
      return next()
    })
  }

  app.use('/', routes({ huntsService, userService, parkService }))

  /** 404 handler */

  app.use(function (req, res, next) {
    return new ExpressError('Not Found', 404)
  })

  app.use((error, req, res, next) => {
    res.status(error.status || 500)
    // Log out the error to the console
    log.error(error)
    return res.json({
      error: {
        message: error.message,
      },
    })
  })
  return app
}
