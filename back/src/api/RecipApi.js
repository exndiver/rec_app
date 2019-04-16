const { Recipe } = require('../models/')
var request = require('request')
const config = require('../config/config')

module.exports = {
  getAllProducts (req, res) {
    var requestParams = {
      uri: config.productssrv.host + '/GetAllProducts',
      body: '',
      method: 'GET',
      headers: {
        'X-Secret-key': config.productssrv.secrete
      }
    }
    request(requestParams, function (err, response) {
      console.log(err, response.body)
      res.type('json')
      res.send(response.body)
    })
  },

  async getRecById (req, res) {
    try {
      const recipeId = req.body.id
      const recipe = await Recipe.findOne({
        where: {
          id: recipeId
        }
      })
      const recipeJson = recipe.toJSON()
      res.send({
        recipe: recipeJson
      })
    } catch (err) {
      console.log(err)
      res.status(403).send({
        error: 'The error has occured. Please try agin later'
      })
    }
  },

  async DelRecById (req, res) {
    try {
      const recipeId = req.body.id
      await Recipe.destroy({
        where: {
          id: recipeId
        }
      })
      res.send({
        result: 'Deleted'
      })
    } catch (err) {
      console.log(err)
      res.status(403).send({
        error: 'The error has occured. Please try agin later'
      })
    }
  },

  async addRecipe (req, res) {
    try {
      const recipe = await Recipe.create(req.body)
      const recipeJson = recipe.toJSON()
      res.send({
        recipe: recipeJson
      })
    } catch (err) {
      console.log(err)
      res.status(403).send({
        error: 'The error has occured. Please try agin later'
      })
    }
  }
}
