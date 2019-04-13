const { User } = require('../models/')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_MONTH = 60 * 60 * 24 * 30
  return jwt.sign(user, config.auth.jwtsecret, {
    expiresIn: ONE_MONTH
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      delete userJson['password']
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'This email is already in use.'
      })
    }
  },

  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      console.log(user)
      if (!user) {
        return res.status(403).send({
          error: 'The login info was incorrect'
        })
      }

      const isPwdValid = user.comparePassword(password)

      if (!isPwdValid) {
        return res.status(403).send({
          error: 'The login info was incorrect'
        })
      }
      const userJson = user.toJSON()
      delete userJson['password']
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(403).send({
        error: 'The error has occured. Please try agin later'
      })
    }
  }
}
