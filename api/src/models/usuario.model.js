// Creacion del esquema Usuario
import mongoose from 'mongoose'

const usuarioSchema = mongoose.Schema(
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
    rol: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default mongoose.model('Usuario', usuarioSchema)
