const AuthApi = require('./api/AuthApi')
const RecApi = require('./api/RecipApi')
const ProductsApi = require('./api/ProductsApi')
const TagsApi = require('./api/TagsApi')
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

  app.get('/GetAllProducts', ProductsApi.getAllProducts)
  app.get('/SearchProducts/:productName', ProductsApi.searchProducts)

  app.post('/AddTag', TagsApi.addTag)
  app.get('/GetAllTags', TagsApi.getTags)
  app.post('/DelTagById', TagsApi.DelTagById)
  app.post('/GetTagById', TagsApi.getTagById)
}
