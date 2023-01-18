import { Router } from 'express'
import * as casaCtrl from '../controllers/casa.controller.js'

const router = Router()

router.get('/', casaCtrl.getCasas)
router.get('/:idCasa', casaCtrl.getCasaById)
router.post('/', casaCtrl.crearCasa)
router.delete('/:idCasa', casaCtrl.eliminarCasa)

export default router
