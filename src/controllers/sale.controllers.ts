import { Response, Request } from "express";
import { Producto } from "../models/producto";
import { ProductoSale, ProductoSaleI } from "../models/productoSale";
import { Sale, SaleI } from "../models/sale";
import { User } from "../models/user";
import { ProductoController } from "./producto.controller";

export class SaleController{

    public async getSales(req: Request, res: Response){
        try {
            const sale = await Sale.findAll()
            if(!sale)return res.status(400).json({msg:"No hay ventas reguistrados."})
            return res.status(200).json({sale})
        } catch (error) {
            res.status(200).json({msg:"Error al conectar con la base."})
        }
    }


    public async createSales(req: Request, res: Response){
        const body: SaleI = req.body;
        try {
            if(!body.descripcion && !body.fecha && !body.iva && !body.subtotal && !body.total){
                return res.status(400).json({msg:"Faltaron datos por ingesar."})
            }

            const saleExist: Sale | null = await Sale.findOne(
                {
                    where: {descripcion: body.descripcion}
                }
            )
            if(saleExist)return res.status(400).json({msg:"Venta ya reguistrada."})

            const sale = await Sale.create(body);
            return res.status(200).json({sale})
        } catch (error) {
            res.status(200).json({msg:"Error al conectar con la base."})
        }

    }


    public async deleteSales(req: Request, res: Response){
        try {
            const {id} = req.body;

            const saleExist: Sale | null = await Sale.findOne(
                {
                    where: {id: id}
                }
            )
            if(!saleExist)return res.status(400).json({msg:"El ID solicitado no existe."})

            const response = await Sale.destroy({
                where: {id:id}
            })
            
            res.status(200).json({msg: "Borrado"})
            res.json(response)
        } catch (error) {
            res.status(200).json({msg:"Error al conectar con la base."})
        }
    }

    public async getSale(req: Request, res: Response){

    }

    public async createRental(req: Request, res: Response){
        const {
            id,
            fecha,
            descripcion,
            iva,
            subtotal,
            total,
            UserId,
            productos
        } = req.body

    
        try {
            
            let body: SaleI = {
                fecha,
                descripcion,
                iva,
                subtotal,
                total,
                UserId,
            }
            

            const sale: Sale = await Sale.create(body)

            const salenew = sale.id
            let productoSaleBody: ProductoSaleI[] = [];

            if(sale != undefined){
                for(let index = 0; index < productos.length; index++){
                    const element = productos[index]
                productoSaleBody.push(
                    {
                        "ProductoId": element.ProductoId,
                        "SaleId": salenew,
                        "precio": element.precio,
                        "cantidad": element.cantidad
                    }
                )
                }
            }
 
            let productsale = await ProductoSale.bulkCreate(productoSaleBody)
            console.log(" prodd: " + productsale.length)
            if(!productsale){
                console.log("Saludo 7 ")
                await Sale.destroy(
                    {
                        where: {
                            id: salenew
                        }
                    }
                )
            }
            console.log("Salud 9")
            const saleCompleted: Sale | null = await Sale.findOne(
                {
                    
                    where: {
                        id: salenew
                    },
                    include: [
                        {
                            model: Producto
                            
                        }
                    ]
                }
            );

            res.status(200).json({saleCompleted})
        } catch (error) {
            
        }


    }

}