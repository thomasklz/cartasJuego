import express from 'express';
import {getPalo } from '../controller/PaloController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/palo', getPalo,verifyToken);


export default rotuer;