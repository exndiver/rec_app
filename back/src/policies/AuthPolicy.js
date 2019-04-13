const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{6,32}$'))
    }
    const { error, value } = Joi.validate(req.body, schema)
    console.log(value)
    console.log(error)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Invalid email.'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Invalid password. <br>Password must contain only lower/upper case, numbers. <br>Password must be 6-32 characters length'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration.'
          })
      }
    } else { next() }
  }
}
