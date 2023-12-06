import express from 'express';
import {getPenitencia } from '../controller/PenitenciaController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/penitencia/:id', getPenitencia,verifyToken);


export default rotuer;