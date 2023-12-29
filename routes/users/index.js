const express = require('express')
const router = express.Router()

module.exports = (userService) => {
  // Get all users
  router.get('/', async (req, res, next) => {
    try {
      const users = await userService.getUsers()
      res.json(users)
    } catch (err) {
      next(err)
    }
  })

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

  // Create a new user
  router.post('/', async (req, res, next) => {
    try {
      const newUser = await userService.createUser(req.body)
      res.status(201).json(newUser)
    } catch (err) {
      next(err)
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
      await userService.deleteUser(req.params.userId)
      res.status(204).send()
    } catch (err) {
      next(err)
    }
  })

  return router
}
