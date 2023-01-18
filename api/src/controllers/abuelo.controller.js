import Abuelo from '../models/abuelo.model.js'
import { ROLES } from '../utils/constants.js'

export const getAbuelos = async (req, res) => {
  try {
    const abuelos = await Abuelo.find()
    res.status(200).json(abuelos)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

export const getAbuleloById = async (req, res) => {
  try {
    const { idAbuelo } = req.params

    const abueloFound = await Abuelo.findById(idAbuelo).populate(['cartas'])

    res.status(200).json(abueloFound)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: error.message,
    })
  }
}

export const eliminarAbuelo = async (req, res) => {
  try {
    const { idAbuelo } = await req.params
    const abuelo = await Abuelo.findByIdAndDelete(idAbuelo)
    if (!abuelo) {
      return res.status(400).json({
        message: 'El abuelo no existe',
      })
    }

    res.status(200).json(abuelo)
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: error.message,
    })
  }
}

export const crearAbuelo = async (req, res) => {
  try {
    const { usuario, imagen, descripcion } = req.body
    console.log('Body: ', req.body)

    const newAbuelo = new Abuelo({
      usuario,
      imagen,
      descripcion,
    })

    await newAbuelo.save()
    return res.status(200).json(newAbuelo)
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: error.message,
    })
  }
}
