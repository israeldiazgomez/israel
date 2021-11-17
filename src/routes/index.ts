import { UserRoutes } from "./user";
import { SaleRoutes } from "./sales";
import { ProductoRoutes } from "../routes/producto";

export class Routes{
    public userRoutes: UserRoutes = new UserRoutes()
    public saleRoutes:  SaleRoutes = new  SaleRoutes()
    public productoroutes: ProductoRoutes = new ProductoRoutes()
}