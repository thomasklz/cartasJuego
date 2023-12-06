import { PaloModel } from "../models/PaloModel.js";

export const getPalo = async (req, res) => {
    try {
      const prueba = await PaloModel.findAll({ where: { state: true } });
      res.status(200).json(prueba);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  