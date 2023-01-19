import axios from 'axios'
import { API_URL } from '../api'

const ext = 'carta/'

const getCartas = async () => {
  return axios.get(API_URL + ext, {
    headers: {
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },
  })
}
const getCartaId = async (id) => {
  return axios.get(API_URL + ext + 'buscar/' + id, {
    headers: {
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },
  })
}

const cartasService = {
  getCartaId,
  getCartas,
}

export default cartasService
