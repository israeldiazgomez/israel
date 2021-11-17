import express, {Application} from "express";
import  morgan  from "morgan";
import { Routes } from "../routes";
export class App{
    app:Application;
    public routePrv: Routes = new Routes()
    constructor(
        private port?: number | string
    ){
        this.app = express();
        this.settings()
        this.middelwares();
        this.routes()
    }

    private settings(){
        this.app.set('port', this.port || 300)
    }
    private middelwares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}))
    }

    private routes(){
        this.routePrv.userRoutes.routes(this.app)
        this.routePrv.saleRoutes.routes(this.app)
        this.routePrv.productoroutes.routes(this.app)
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Servidor funcionando en el puerto: ', this.app.get('port'))
    }
}



