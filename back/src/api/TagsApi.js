const { Tag } = require('../models')

module.exports = {
  async getTagById (req, res) {
    try {
      const tagId = req.body.id
      const tag = await Tag.findOne({
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
      const tag = await Tag.findAll({ raw: true })
      console.log(tag)
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
      await Tag.destroy({
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
      const tag = await Tag.create(req.body)
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
