const pool = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ExpressError = require('../expressError')

class UserService {
  async getUsers() {
    const result = await pool.query(`SELECT user_id, username FROM users`)
    return result.rows
  }

  async getUserById(userId) {
    const result = await pool.query(
      `SELECT user_id, username FROM users WHERE user_id = $1`,
      [userId]
    )
    if (result.rows.length === 0) throw new ExpressError('User not found', 404)
    return result.rows[0]
  }

  async createUser({ username, email, password, passwordConfirmation }) {
    if (!username || !email || !password)
      throw new ExpressError('Username, email, and password are required', 400)

    if (password !== passwordConfirmation)
      throw new ExpressError('Passwords do not match', 400)

    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await pool.query(
      `INSERT into users (username, email, user_password) VALUES ($1, $2, $3) RETURNING *`,
      [username, email, hashedPassword]
    )
    return result.rows[0]
  }

  async loginUser(username, password) {
    const result = await pool.query(`SELECT * FROM users WHERE username = $1`, [
      username,
    ])
    if (result.rows.length > 0) {
      const user = result.rows[0]
      const isMatch = await bcrypt.compare(password, user.user_password)
      if (isMatch) {
        const token = jwt.sign(
          { userId: user.id },
          process.env.JWT_SECRET_TOKEN
        )
        return { user, token }
      }
      throw new ExpressError('Invalid credentials', 401)
    }
    throw new ExpressError('User not found', 404)
  }

  async updateUser(userId, updateData) {
    const entries = Object.entries(updateData) // [ [ 'username', 'Beth' ] ]

    const updates = entries
      .map(([key, value], index) => `${key} = $${index + 1}`)
      .join(', ') // updates username = $1

    const values = entries.map(([key, value]) => value) // updates username = $1

    if (!updates) throw new ExpressError('No update data provided', 400)

    try {
      const result = await pool.query(
        `UPDATE users SET ${updates} WHERE user_id = $${
          entries.length + 1
        } RETURNING *`,
        [...values, userId]
      )
      if (result.rows.length === 0)
        throw new ExpressError('User not found', 404)
      return result.rows[0]
    } catch (err) {
      throw new ExpressError('Error updating user', 500)
    }
  }

  async deleteUser(userId) {
    await pool.query(`DELETE FROM users WHERE user_id = $1`, [userId])
  }
}

module.exports = UserService
