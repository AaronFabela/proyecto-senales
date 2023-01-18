import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ttchambitas23:ttchambitas23@cluster0.kvorbff.mongodb.net/?retryWrites=true&w=majority'
    )
    console.log('Conexion exitosa')
  } catch (error) {
    console.log(error)
  }
}
