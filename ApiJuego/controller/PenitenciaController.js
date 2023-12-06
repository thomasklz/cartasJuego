import { PenitenciaModel } from "../models/PenitenciaModel.js";

export const getPenitencia = async (req, res) => {
    try {
      if(!(req.params.id)){
        res.status(200).json({ message: "El campo código no puede estar vacío"});
      }
      const penitencia = await PenitenciaModel.findOne({ where: { id: req.params.id } });
      res.status(200).json(penitencia);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  