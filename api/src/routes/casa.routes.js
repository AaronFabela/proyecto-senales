import { Router } from "express";
import * as casaCtrl from "../controllers/casa.controller.js";
import { filesUpload } from "../utils/cloudinary.js";

const router = Router();

router.get("/", casaCtrl.getCasas);
router.get("/buscar/:idCasa", casaCtrl.getCasaById);
router.post("/nuevaCasa", filesUpload(), casaCtrl.crearCasa);
router.delete("/eliminarCasa/:idCasa", casaCtrl.eliminarCasa);

export default router;
