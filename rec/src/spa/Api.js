import axios from 'axios'

const config = require('../../config')

export default () => {
  return axios.create({
    baseURL: config.dev.bebaseurl || '/api/'
  })
}
