const pool = require('../db')
const bcrypt = require('bcrypt')
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

  async createUser({ username, email, password }) {
    if (!username || !email || !password)
      throw new ExpressError('Username, email, and password are required', 400)

    console.log('Creating user with:', { username, email, password })

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
      const isMatch = await bcrypt.compare(password, user.password)
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
    const entries = Object.entries(updateData)
    const updates = entries
      .map(([key, value], index) => `${key} = $${index + 1}`)
      .join(', ')
    const values = entries.map(([key, value]) => value)

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
