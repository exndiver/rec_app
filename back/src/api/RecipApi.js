const { Recipe } = require('../models/')

module.exports = {
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

  async addRecipe (req, res) {
    try {
      console.log(req.body)
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
