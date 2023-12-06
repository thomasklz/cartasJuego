import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const PaloModel = sequelize.define("palos",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    palo:{
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