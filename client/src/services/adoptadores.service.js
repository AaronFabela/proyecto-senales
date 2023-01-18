import axios from 'axios'
import { API_URL } from '../api'

const ext = 'adoptador/'

const getAdoptadores = async () => {
  return axios.get(API_URL + ext, {
    headers: {
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },
  })
}
const getAdoptadorId = async (id) => {
  return axios.get(API_URL + ext + 'buscar/' + id, {
    headers: {
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },
  })
}

const deleteAdoptadorId = async (id) => {
  return axios.delete(API_URL + ext + 'eliminarAdoptador/' + id, {
    headers: {
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },
  })
}

const adoptadoresService = {
  getAdoptadorId,
  getAdoptadores,
  deleteAdoptadorId,
}

export default adoptadoresService
