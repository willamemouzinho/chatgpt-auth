// DatabaseConfig.ts
import mongoose from 'mongoose'

export const connectDatabase = () => {
  return mongoose.connect('your_database_url', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
