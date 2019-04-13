const AuthApi = require('./api/AuthApi')
const AuthPolicy = require('./policies/AuthPolicy')

module.exports = (app) => {
  app.get('/info', (req, res) => {
    res.send({
      message: 'ok'
    })
  })

  app.post('/register', AuthPolicy.register, AuthApi.register)
}
