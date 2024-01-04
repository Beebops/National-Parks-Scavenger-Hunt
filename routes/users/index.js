const express = require('express')
const ExpressError = require('../../expressError')
const authenticateJWT = require('../../middleware/authMiddleware')
const huntsRoute = require('./hunts/index')
const router = express.Router()

module.exports = (userService, huntsService) => {
  // Get all users
  router.get('/', async (req, res, next) => {
    try {
      const users = await userService.getUsers()
      res.json(users)
    } catch (err) {
      next(err)
    }
  })

  // Create a new user
  router.post('/', async (req, res, next) => {
    try {
      const newUser = await userService.createUser(req.body)
      res.status(201).json(newUser)
    } catch (err) {
      next(err)
    }
  })

  // Login User
  router.post('/login', async (req, res, next) => {
    try {
      console.log(req.body)
      const { username, password } = req.body
      if (!username || !password)
        throw new ExpressError('Username and password are required', 400)
      const loginResponse = await userService.loginUser(username, password)
      res.status(200).json(loginResponse)
    } catch (err) {
      next(err)
    }
  })

  router.use(authenticateJWT)

  // Get a single user by user_id
  router.get('/:userId', async (req, res, next) => {
    {
      try {
        const user = await userService.getUserById(req.params.userId)
        res.json(user)
      } catch (err) {
        next(err)
      }
    }
  })

  // Update user
  router.put('/:userId', async (req, res, next) => {
    try {
      const updatedUser = await userService.updateUser(
        req.params.userId,
        req.body
      )
      res.json(updatedUser)
    } catch (err) {
      next(err)
    }
  })

  // Delete user
  router.delete('/:userId', async (req, res, next) => {
    try {
      const message = await userService.deleteUser(req.params.userId)
      res.status(200).json({ message })
    } catch (err) {
      next(err)
    }
  })

  router.use('/:userId/hunts', huntsRoute(huntsService))

  return router
}
