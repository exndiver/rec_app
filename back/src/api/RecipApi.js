const { Recipe } = require('../models/')
const { RecipeTags } = require('../models/')

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
      JSON.parse(req.body.tags).forEach(element => {
        const tagstolink = {
          'RecipeID': recipeJson.id,
          'TagID': element
        }
        RecipeTags.create(tagstolink)
      })

      /*
      cons tagstolink = {
        RecipeID: recipeJson.id,
        TagID: req.body.
      }
      const recipetags = RecipeTags.create() */
      res.send({
        recipe: recipeJson
        // tags: recipetags
      })
    } catch (err) {
      console.log(err)
      res.status(403).send({
        error: 'The error has occured. Please try agin later'
      })
    }
  }
}
