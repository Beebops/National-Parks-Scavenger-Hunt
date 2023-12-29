const pool = require('../db')

class UserService {
  async getUsers() {
    const result = await pool.query(`SELECT * FROM users`)
    return result.rows
  }

  async createUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await pool.query(
      `INSERT into users (username, password) VALUES ($1, $2) RETURNING *`,
      [username, hashedPassword]
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
      throw new Error('Invalid credentials')
    }
    throw new Error('User not found')
  }

  async deleteUser(userId) {
    await pool.query(`DELETE FROM users WHERE user_id = $1`, [userId])
  }
}

module.exports = UserService
