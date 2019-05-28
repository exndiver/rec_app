import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: process.env.BE || 'http://localhost:8081'
  })
}
