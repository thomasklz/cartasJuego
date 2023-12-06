import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const PenitenciaModel = sequelize.define("penitencias",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    penitencia:{
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
//await TypeUsersModel.sync({ force: true });