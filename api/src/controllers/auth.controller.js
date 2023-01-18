import Usuario from '../models/usuario.model.js'
import Casa from '../models/casa.model.js'
import Adoptador from '../models/adoptador.model.js'

export const login = async (req, res) => {
  try {
    const { usuario, password } = req.body

    const userFound = await Usuario.findOne({
      usuario: usuario,
      password: password,
    })
    const casaFound = await Casa.findOne({
      usuario: usuario,
      password: password,
    }).populate(['abuelos'])
    const adoptadorFound = await Adoptador.findOne({
      usuario: usuario,
      password: password,
    }).populate(['abuelos'])

    let userLogin

    if (userFound) {
      userLogin = { login: true, userFound }
    }

    if (casaFound) {
      userLogin = { login: true, casaFound }
    }

    if (adoptadorFound) {
      userLogin = { login: true, adoptadorFound }
    }

    return res.status(200).json(userLogin)
  } catch (error) {
    return res.status(400).json({
      code: 400,
      message: error.message,
    })
  }
}
