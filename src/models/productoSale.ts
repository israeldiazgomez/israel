import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";


export class ProductoSale extends Model{
    public cantidad!: number;
    public precio!: number
}


export interface ProductoSaleI{
    ProductoId: number
    SaleId: number;
    cantidad: number
    precio: number
}

ProductoSale.init(

   {
    cantidad: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    precio: {
        type: DataTypes.BIGINT,
        allowNull: false
    },

},

   {
    tableName: "ProductoSale",
    sequelize: database,
    timestamps: true
   }

)

