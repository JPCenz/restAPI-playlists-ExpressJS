import type { Request, Response } from "express";
import { PrismaClient, Song } from "@prisma/client";
import { generateKey } from "crypto";

const prisma = new PrismaClient();

export const agregarCancion = async (req:Request, res:Response) =>{
   try{
    const{id_song, id_playlist} = req.body;

    const playlist = await prisma.playlist.update({
        where:{id:Number(id_playlist)},
        include:{songs:true},
        data:{
            songs:{connect:{
                id:Number(id_song)
            }}
        }

    });
    res.status(200).json({
        ok:true,
        message:"se agrego la cancion correctamente",
    })
   } catch(error){
    res.status(500).json({
        ok: false,
        message:error
    })
   }
}