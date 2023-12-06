import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const PruebaModel = sequelize.define("prueba",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    apellido:{
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