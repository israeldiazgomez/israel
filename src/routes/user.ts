import { Application } from "express";
import { UserController } from "../controllers/use.controllers";

export class UserRoutes{
    public usercontroller: UserController = new UserController();


    public routes(app: Application){
        app.route('/users').get(this.usercontroller.getUsers)
        app.route('/createusers').post(this.usercontroller.createUsers)
        app.route('/deleteusers').delete(this.usercontroller.deleteUsers)
    }
}