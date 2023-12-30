const jwt = require('jsonwebtoken')
const ExpressError = require('../expressError')

const authenticateJWT = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (authHeader) {
      const token = authHeader.split(' ')[1]
      const user = jwt.verify(token, process.env.JWT_SECRET_TOKEN)
      req.user = user
    } else {
      throw new ExpressError('Missing token', 401)
    }
    return next()
  } catch (err) {
    return next(new ExpressError('Invalid token', 401))
  }
}

module.exports = authenticateJWT
