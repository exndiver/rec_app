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
      if (err) {
        res.status(403).send({
          error: 'The error has occured. Please try agin later'
        })
        return
      }
      res.type('json')
      res.send(response.body)
    })
  },

  addProduct (req, res) {
    console.log(req.body)
    var requestParams = {
      uri: config.productssrv.host + '/AddProduct',
      json: req.body,
      method: 'POST',
      headers: {
        'X-Secret-key': config.productssrv.secrete
      }
    }
    request(requestParams, function (err, response) {
      if (err) {
        res.status(403).send({
          error: 'The error has occured. Please try agin later'
        })
        return
      }
      res.type('json')
      res.send(response.body)
    })
  },

  searchProducts (req, res) {
    var requestParams = {
      uri: config.productssrv.host + '/SearchProducts/' + req.params.productName,
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
  }
}
