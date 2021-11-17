import { Application } from "express";
import { SaleController } from "../controllers/sale.controllers";

export class SaleRoutes{
    public salecontroller: SaleController= new SaleController();


    public routes(app: Application){
        app.route('/sales').get(this.salecontroller.getSales)
        app.route('/createsales').post(this.salecontroller.createRental)
        app.route('/deletesales').delete(this.salecontroller.deleteSales)
        
    }
}