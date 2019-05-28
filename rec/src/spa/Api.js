import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: process.env.BACKEND || 'http://localhost:8081/'
  })
}
