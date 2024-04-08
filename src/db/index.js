import mongoose from 'mongoose';
import { DB_name } from '../constants.js';

const connectDB = async() => {
    try {
        const connectionInstance = mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        console.log("MongoDB connected Successfully, DB HOST: ", connectionInstance)
    } catch (error) {
        console.error("Error in db/index.js: ", error)
        process.exit(1)
    }
}

export { connectDB }
