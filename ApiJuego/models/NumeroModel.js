import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { PaloModel } from "./PaloModel.js";
import { PenitenciaModel } from "./PenitenciaModel.js";

export const NumeroModel = sequelize.define("numeros",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    numero:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
},
{
    timestamps:false
}
)
PaloModel.hasMany(NumeroModel, { foreignKey: "palo_id" });
NumeroModel.belongsTo(PaloModel, { foreignKey: "palo_id" });

PenitenciaModel.hasMany(NumeroModel, { foreignKey: "penitencia_id" });
NumeroModel.belongsTo(PenitenciaModel, { foreignKey: "penitencia_id" });

//await TypeUsersModel.sync({ force: true });