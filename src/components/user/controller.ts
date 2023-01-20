import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {hashPassword,comparePassword,signJwt,verifyJwt} from "./utils/auth"

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<any> => {
    const users = await prisma.user.findMany();
    res.status(200).json(
        {
            users:users.map(user => user.email)
        }
    );
};

export const signUp =async (req:Request, res:Response):Promise<any> => {
    try {
        const {name,email,password,date_born} = req.body;
        if (!name || !email || !password || !date_born){
            return res.status(400).json({
                message: "Ingrese todos los campos"
            })
            

        }

        const user = await prisma.user.findUnique({
            where:{
                email:email
            }
        });

        if (user) {
            return res.status(400).json({
                message: "Email ya existe"
            })
            
        }

        if (!Date.parse(date_born)) {
            return res.status(400).json({
                message: "Fecha incorrecta ,use el formato DD/MM/AAAA"
            });
            
        }

        const data = {
            name :name,
            email : email,
            date_born:new Date(Date.parse(date_born)),
            password : await hashPassword(password),
        }
        const response = await prisma.user.create({data});
        console.log(response)
        return res.status(201).json({
            message:"Usuario creado correctamente"
        });
    } catch (error:any) {
        return res.status(500).json({
            message: "error del servidor"
        
    });
    }
    
};

export const login = async (req:Request, res:Response):Promise<any> => {
    try {
        const {email,password} = req.body;
        if (!email || !password) {
            return res.status(400).json({
                "message":"Escriba un email o password"
            });
        };
        const user = await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if (!user || !await comparePassword(password,user?.password)) {
            return res.status(404).json({
                "message":"User no existe o contrasena incorrecta"
            });
        }else{
            return res.status(200).json({
                ok: true,
                access_token : signJwt({
                    id:user.id
                })
            });
        }
        
    } catch (error:any) {
        return res.status(500).json({
            message: "error del servidor"
            
    });
    }
    
};

export const verifyToken = async (req: Request, res: Response): Promise<any> => {
    const authHeader = req.headers['authorization'];
    const is_token = authHeader && authHeader.split('')[1];
    if(is_token == null) return res.status(401)
    const token : string = authHeader?.split(' ')[1] ?? "";

    const payload :any= verifyJwt(token);
    if (!payload) {
        console.log(token);
        
        return res.status(403).json({
            message: "token invalido"
        }) 
    }
    return res.status(200).json(
        {
            message :"token valido",
            user_id : payload.id
        }
    );
};