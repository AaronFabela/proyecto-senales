import app from './app.js'
import { connectDB } from './utils/database.js'
import { PORT } from './config.js'

const main = async () => {
  await connectDB()
  app.listen(PORT)
  console.log('Server listen on port:', PORT)
}

main()
