import { Response, Request } from "express";
import { User,UserI } from "../models/user";

export class UserController{

    public async getUsers(req: Request, res: Response){
        try {
            const users = await User.findAll()

            if(!users)return res.status(400).json({msg:"No hay usuarios reguistrados."})
            return res.status(400).json({users})
        } catch (error) {
            res.status(200).json({msg:"Error al conectar con la base."})
        }
    }

    public async createUsers(req: Request, res: Response){
        const body: UserI = req.body;
        try {
            if(!body.apellido && !body.clave && !body.correo && !body.nombre){
                return res.status(400).json({msg:"Faltaron datos por ingesar."})
            }
            const userExist: User | null = await User.findOne(
                {
                    where: {correo: body.correo}
                }
            )
            if(userExist)return res.status(400).json({msg:"Este correo ya esta reguistrado."})
            const user = await User.create(body);
            return res.status(200).json({user})
        } catch (error) {
            
        }
    }

    public async deleteUsers(req: Request, res: Response){
        try {
            const {id} = req.body;

            const userExist: User | null = await User.findOne(
                {
                    where: {id: id}
                }
            )
            if(!userExist)return res.status(400).json({msg:"El ID solicitado no existe."})

            const response = await User.destroy({
                where: {id:id}
            })
            
            res.status(200).json({msg: "Borrado"})
            res.json(response)
        } catch (error) {
            res.status(200).json({msg:"Error al conectar con la base."})
        }
    }
}
