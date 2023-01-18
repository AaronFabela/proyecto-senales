import mongoose from "mongoose";

const casaSchema = mongoose.Schema(
  {
    usuario: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      //unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
    },
    abuelos: [
      {
        ref: "Abuelo",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    telefono: {
      type: String,
    },
    imagen: {
      public_id: String,
      secure_url: String,
    },
    rol: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Casa", casaSchema);
