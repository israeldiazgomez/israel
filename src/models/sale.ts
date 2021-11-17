import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { User } from "./user";

export class Sale extends Model{
    public id!: number;
    public fecha!: Date;
    public descripcion!: string;
    public iva!: number;
    public subtotal!: number;
    public total!: number;
}
export interface SaleI{
    fecha: Date,
    descripcion: string;
    iva: number;
    subtotal: number;
    total: number;
    UserId: number;
 
}

Sale.init(

   {
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    iva: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    total: {
        type: DataTypes.BIGINT,
        allowNull: false
    },

   },
   {
    tableName: "Ventas",
    sequelize: database,
   // timestamps: true
   }

)

Sale.hasMany(User)
User.belongsTo(Sale)