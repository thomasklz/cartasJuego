import express from 'express';
import {getNumeros, jugar } from '../controller/NumeroController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/numero', getNumeros, verifyToken);
rotuer.get('/jugar', jugar);

export default rotuer;