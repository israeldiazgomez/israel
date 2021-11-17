import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class User extends Model{
    public nombre!: string;
    public apellido!: string;
    public correo!: string;
    public clave!: string;
}
export interface UserI{
    nombre: string;
    apellido: string;
    correo: string;
    clave: string;
}

User.init(

   {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false
    },

   },
   {
    tableName: "Usuario",
    sequelize: database,
    timestamps: true
   }

)