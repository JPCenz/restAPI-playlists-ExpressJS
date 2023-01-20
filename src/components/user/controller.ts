import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {hashPassword,comparePassword} from "./utils/auth"

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<any> => {
    const users = await prisma.user.findMany();
    res.status(200).json(
        {
            users:users.map(user => user.date_born)
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
        if (!user ) {
            return res.status(404).json({
                "message":"User no existe"
            });
        }
        const passwordisValid = await comparePassword(password,user?.password)
        if (await comparePassword(password,user?.password)) {
            return res.status(200).json({
                PasswordValid: passwordisValid
            });
        }else{
            return res.status(403).json({
                PasswordValid: passwordisValid
            });
        }
        
    } catch (error:any) {
        return res.status(500).json({
            message: "error del servidor"
            
    });
    }
    
};