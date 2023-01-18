import Adoptador from '../models/adoptador.model.js'
import { ROLES } from '../utils/constants.js'

export const getAdoptadores = async (req, res) => {
  try {
    const adoptadores = await Adoptador.find()
    res.status(200).json(adoptadores)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

export const getAdoptadorById = async (req, res) => {
  try {
    const { idAdoptador } = req.params

    const adoptadorFound = await Adoptador.findById(idAdoptador)

    res.status(200).json(adoptadorFound)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: error.message,
    })
  }
}

export const eliminarAdoptador = async (req, res) => {
  try {
    const { idAdoptador } = await req.params
    const adoptador = await Adoptador.findByIdAndDelete(idAdoptador)
    if (!adoptador) {
      return res.status(400).json({
        message: 'El adoptador no existe',
      })
    }

    res.status(200).json(adoptador)
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: error.message,
    })
  }
}

export const crearAdoptador = async (req, res) => {
  try {
    const { usuario, email, password } = req.body
    console.log('Body: ', req.body)

    const newAdoptador = new Adoptador({
      usuario,
      email,
      password,
      rol: ROLES.ADOPTADOR,
    })

    await newAdoptador.save()
    return res.status(200).json(newAdoptador)
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: error.message,
    })
  }
}
