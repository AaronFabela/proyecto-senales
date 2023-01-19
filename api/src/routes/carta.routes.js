import { Router } from 'express'
import * as cartaCtrl from '../controllers/carta.controller.js'
import { filesUpload } from '../utils/cloudinary.js'

const router = Router()

router.get('/', cartaCtrl.getCartas)
router.get('/buscar/:idCarta', cartaCtrl.getCartaById)
router.post('/nuevaCarta', filesUpload(), cartaCtrl.crearCarta)
router.delete('/eliminarCarta/:idCarta', cartaCtrl.eliminarCarta)

export default router
