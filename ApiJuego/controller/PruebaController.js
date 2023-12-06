import { PruebaModel } from "../models/PruebaModel.js";

export const getPrueba = async (req, res) => {
    try {
      const prueba = await PruebaModel.findAll({ where: { state: true } });
      res.status(200).json(prueba);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  