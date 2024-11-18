

import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'

import winston from 'winston'
import bodyParser from 'body-parser'
import routes from './src/routes/index.js'
import connectDB from './src/config/db.js'

const app = express()
const PORT = process.env.PORT || 8080

dotenv.config()
connectDB()

//middle wares
app.use(
    cors({
        origin: '*',
        methods: ['post', 'get', 'put', 'delete'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        optionsSuccessStatus: 200
    })
)

app.use(bodyParser.json({limit: '50mb'}));


//routes 
routes(app)

app.listen(PORT, ()=> winston.info(`Server is running on ${PORT}`))