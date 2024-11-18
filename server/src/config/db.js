import mongoose from 'mongoose'
import winston from 'winston'

const connectDB = async ()=> {
    try {

        const conn = await mongoose.connect(process.env.Mongo_URL, {})
        winston.info(`mongoDB connected ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`Error ${error.message}`)
    }
}

export default connectDB;