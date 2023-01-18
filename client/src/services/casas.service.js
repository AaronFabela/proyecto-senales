import axios from 'axios'
import { API_URL } from '../api'

const ext = 'casa/'

const getCasas = async () => {
  return axios.get(API_URL + ext, {
    headers: {
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },
  })
}
const getCasasId = async (id) => {
  return axios.get(API_URL + ext + id, {
    headers: {
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },
  })
}

const deleteCasasId = async (id) => {
  return axios.delete(API_URL + ext + id, {
    headers: {
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },
  })
}

const casasService = {
  getCasas,
  getCasasId,
  deleteCasasId,
}

export default casasService
