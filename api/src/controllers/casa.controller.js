import Casa from "../models/casa.model.js";
import { ROLES } from "../utils/constants.js";
import { uploadNewImage } from "../helpers/uploadImage.helper.js";

export const getCasas = async (req, res) => {
  try {
    const casas = await Casa.find().populate("abuelos");
    res.status(200).json(casas);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getCasaById = async (req, res) => {
  try {
    const { idCasa } = req.params;

    const casaFound = await Casa.findById(idCasa).populate("abuelos");

    res.status(200).json(casaFound);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const eliminarCasa = async (req, res) => {
  try {
    const { idCasa } = await req.params;
    const casa = await Casa.findByIdAndDelete(idCasa);
    if (!casa) {
      return res.status(400).json({
        message: "La casa no existe",
      });
    }

    res.status(200).json(casa);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const crearCasa = async (req, res) => {
  try {
    const { usuario, email, password, direccion, telefono } = req.body;
    console.log("Body: ", req.body);
    var image;

    const newCasa = new Casa({
      usuario,
      email,
      password,
      direccion,
      telefono,
      rol: ROLES.CASA,
    });

    req.files
      ? (image = await uploadNewImage(req.files.imagen, res, newCasa))
      : null;

    if (image) {
      newCasa.imagen = {
        public_id: image.public_id,
        secure_url: image.secure_url,
      };
    }

    await newCasa.save();
    return res.status(200).json(newCasa);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
    });
  }
};
