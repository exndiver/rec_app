const { Recipes } = require('../models/')
const { Tags } = require('../models/')
const { RecipeTags } = require('../models/')

module.exports = {
  async getRecById (req, res) {
    try {
      const recipeId = req.body.id
      const recipe = await Recipes.findOne({
        where: {
          id: recipeId
        },
        include: [{
          model: Tags,
          as: 'Tags',
          required: false,
          attributes: ['id', 'name'],
          through: { attributes: [] }
        }]
      })
      const recipeJson = recipe.toJSON()
      recipeJson.ingedients = JSON.parse(recipeJson.ingedients)
      recipeJson.type = JSON.parse(recipeJson.type)
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
      await Recipes.destroy({
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
      const recipe = await Recipes.create(req.body)
      const recipeJson = recipe.toJSON()
      JSON.parse(req.body.tags).forEach(element => {
        const tagstolink = {
          'RecipeID': recipeJson.id,
          'TagID': element
        }
        RecipeTags.create(tagstolink)
      })
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
