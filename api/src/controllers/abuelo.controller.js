import Abuelo from "../models/abuelo.model.js";
import { ROLES } from "../utils/constants.js";
import { uploadNewImage } from "../helpers/uploadImage.helper.js";
import Casa from "../models/casa.model.js";
import { deleteImage } from "../utils/cloudinary.js";

export const getAbuelos = async (req, res) => {
  try {
    const abuelos = await Abuelo.find();
    res.status(200).json(abuelos);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getAbuleloById = async (req, res) => {
  try {
    const { idAbuelo } = req.params;

    const abueloFound = await Abuelo.findById(idAbuelo).populate(["cartas"]);

    res.status(200).json(abueloFound);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const eliminarAbuelo = async (req, res) => {
  try {
    const { idAbuelo } = await req.params;
    const abuelo = await Abuelo.findByIdAndDelete(idAbuelo);
    if (!abuelo) {
      return res.status(400).json({
        message: "El abuelo no existe",
      });
    }

    abuelo.imagen.public_id ? await deleteImage(abuelo.imagen.public_id) : null;

    res.status(200).json({ abuelo, message: "Usuario eliminado", code: 200 });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const crearAbuelo = async (req, res) => {
  try {
    const { idCasa, usuario, edad, descripcion } = req.body;
    console.log("Body: ", req.body);
    var image;

    const newAbuelo = new Abuelo({
      usuario,
      edad,
      descripcion,
    });

    req.files
      ? (image = await uploadNewImage(req.files.imagen, res, newAbuelo))
      : null;

    if (image) {
      newAbuelo.imagen = {
        public_id: image.public_id,
        secure_url: image.secure_url,
      };
    }

    await newAbuelo.save();

    if (newAbuelo) {
      const casa = await Casa.findByIdAndUpdate(
        idCasa,
        {
          $addToSet: { abuelos: newAbuelo },
        },
        { new: true }
      );

      !casa
        ? res
            .status(400)
            .json({ message: "No se ha encontrado la casa", code: 400 })
        : res.status(200).json(newAbuelo);
    } else {
      res.status(401).json({
        message: "Hubo un error al crear el nuevo registro",
        code: 401,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
    });
  }
};
