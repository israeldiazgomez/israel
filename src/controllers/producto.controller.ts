import { Response, Request } from "express";
import { Producto} from "../models/producto";

export class ProductoController{

    public async getProductos(req: Request, res: Response){
        try {
            const producto = await Producto.findAll()
            if(!producto )return res.status(400).json({msg:"No hay ventas reguistrados."})
            return res.status(200).json({producto })
        } catch (error) {
            res.status(200).json({msg:"Error al conectar con la base."})
        }
    }


    

}