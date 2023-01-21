import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client"; 
import { domainToASCII } from "url";

const prisma = new PrismaClient();

export const getPlaylist =async (req:Request,res:Response): Promise<void> => {
    try{
        const playlists = await prisma.playlist.findMany();
        res.status(200).json({
            playlists:playlists
        });
    } catch (error){
        res.status(500).json({
            ok:false,
            message: error,
        });
    }
};


export const postPlaylist =async (req:Request,res:Response): Promise<void> => {
    try {
        const playolis= req.body;

        const e = await prisma.playlist.create({
            data:{
                name: playolis.name,
                user_id: playolis.user_id,
                songs:playolis.songs
            }
        });

        res.status(200).json({
            message:"playlist creado",
            playlist: e
        });
    } catch (err){
        res.status(500).json({
            message: err,
        })
    }
}
export const getIdPlaylist =async (req:Request,res:Response): Promise<void> =>{
    const playlistId = Number(req.params.id);
    const playli = await prisma.playlist.findUnique({
        where:{id:playlistId,},
        include:{songs:true}
    })
    if (playli)
        res.status(200).json({playlist:playli})
    else
        res.status(400).json({messaje:"no esiste tu playlist"})
}

