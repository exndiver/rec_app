const AuthApi = require('./api/AuthApi')
const RecApi = require('./api/RecipApi')
const AuthPolicy = require('./policies/AuthPolicy')

module.exports = (app) => {
  app.get('/info', (req, res) => {
    res.send({
      message: 'ok'
    })
  })

  app.post('/register', AuthPolicy.register, AuthApi.register)
  app.post('/login', AuthApi.login)

  app.post('/GetRecById', RecApi.getRecById)
  app.post('/AddRecipe', RecApi.addRecipe)
  app.post('/DelRecipeById', RecApi.DelRecById)
}
