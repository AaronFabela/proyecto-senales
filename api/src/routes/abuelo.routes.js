import { Router } from 'express'
import * as abueloCtrl from '../controllers/abuelo.controller.js'

const router = Router()

router.get('/', abueloCtrl.getAbuelos)
router.get('/:idAbuelo', abueloCtrl.getAbuleloById)
router.post('/', abueloCtrl.crearAbuelo)
router.delete('/:idAbuelo', abueloCtrl.eliminarAbuelo)

export default router
