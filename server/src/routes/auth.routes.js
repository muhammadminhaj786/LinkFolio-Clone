import express from 'express'
import { createUser, login } from '../controllers/auth.controller.js'

const authRoutes = express.Router()


authRoutes.post('/signup', createUser);
authRoutes.post('/login', login);
export default authRoutes;