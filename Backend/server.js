import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dotenv from  'dotenv'

const app = express()
app.use(cors())
dotenv.config()

const port = process.env.PORT
const mongoDB_Url = process.env.MONGODB_URL


mongoose.connect(mongoDB_Url).then(()=>console.log('db connected')).catch((err)=>console.log('db is not connected'))

app.listen(port,console.log(`Server is running on ${port}`))

const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});