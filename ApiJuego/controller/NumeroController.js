import { NumeroModel } from "../models/NumeroModel.js";

export const getNumeros = async (req, res) => {
    try {
      const numeros = await NumeroModel.findAll({ where: { state: true } });
      res.status(200).json(numeros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  export const jugar = async (req, res) => {
    try {
      const numeros = await NumeroModel.findAll({ where: { state: true } });
      const num1 = getRandomIntInclusive(1, numeros.length) ;
      res.status(200).json(numeros[num1-1]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  