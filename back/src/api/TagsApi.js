const { Tags } = require('../models')

module.exports = {
  async getTagById (req, res) {
    try {
      const tagId = req.body.id
      const tag = await Tags.findOne({
        where: {
          id: tagId
        }
      })
      const tagJson = tag.toJSON()
      res.send({
        tag: tagJson
      })
    } catch (err) {
      console.log(err)
      res.status(403).send({
        error: 'The error has occured. Please try agin later'
      })
    }
  },
  async getTags (req, res) {
    try {
      const tag = await Tags.findAll({ raw: true })
      // const tagJson = tag.toJSON()
      res.send({
        tag: tag
      })
    } catch (err) {
      console.log(err)
      res.status(403).send({
        error: 'The error has occured. Please try agin later'
      })
    }
  },
  async DelTagById (req, res) {
    try {
      const tagId = req.body.id
      await Tags.destroy({
        where: {
          id: tagId
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

  async addTag (req, res) {
    try {
      const tag = await Tags.create(req.body)
      const tagJson = tag.toJSON()
      res.send({
        tag: tagJson
      })
    } catch (err) {
      console.log(err)
      res.status(403).send({
        error: 'The error has occured. Please try agin later'
      })
    }
  }
}
