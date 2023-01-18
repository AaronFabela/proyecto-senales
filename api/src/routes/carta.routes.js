import { Router } from "express";
import * as cartaCtrl from "../controllers/carta.controller.js";

const router = Router();

router.get("/", cartaCtrl.getCartas);
router.get("/buscar/:idCasa", cartaCtrl.getCartaById);
router.post("/nuevaCarta", cartaCtrl.crearCarta);
router.delete("/eliminarCarta/:idCasa", cartaCtrl.eliminarCarta);

export default router;
