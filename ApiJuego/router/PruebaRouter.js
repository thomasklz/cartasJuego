import express from 'express';
import {getPrueba } from '../controller/PruebaController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/prueba', getPrueba);


export default rotuer;