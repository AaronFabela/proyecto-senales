import Carta from "../models/carta.model.js";
import { uploadNewImage } from "../helpers/uploadImage.helper.js";

export const getCartas = async (req, res) => {
  try {
    const cartas = await Carta.find();
    res.status(200).json(cartas);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getCartaById = async (req, res) => {
  try {
    const { idCarta } = req.params;

    const carta = await Carta.findById(idCarta);

    res.status(200).json(carta);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const eliminarCarta = async (req, res) => {
  try {
    const { idCarta } = await req.params;
    const carta = await Carta.findByIdAndDelete(idCarta);
    if (!carta) {
      return res.status(400).json({
        message: "No se encontro la carta",
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

export const crearCarta = async (req, res) => {
  try {
    const { idAbuelo, titulo, contenido } = req.body;
    console.log("Body: ", req.body);
    var image;

    const abuelo = await Abuelo.findById(idAbuelo);

    !abuelo
      ? res
          .status(400)
          .json({ message: "No tenemos registro del remitente", code: 400 })
      : null;

    const newCarta = new Carta({
      titulo,
      contenido,
    });

    req.files
      ? (image = await uploadNewImage(req.files.imagen, res, newCarta))
      : null;

    if (image) {
      newCarta.imagen = {
        public_id: image.public_id,
        secure_url: image.secure_url,
      };
    }

    await newCarta.save();
    return res.status(200).json(newCarta);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
    });
  }
};
