import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listarSong = async (req: Request, res: Response): Promise<void> => {
    try {
        const songs = await prisma.song.findMany({
            include: { playlists: true },
        });

        res.status(200).json({
            ok: true,
            data: songs,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error,
        });
    }
};

export const getIdSong =async (req:Request,res:Response): Promise<void> =>{
    const songId = Number(req.params.id);
    const songs = await prisma.song.findFirst({
        where:{ id:songId }
    })
    if (songs)
        res.status(200).json({ song:songs });
    else
        res.status(400).json({messaje:"No existe song"});
}



export const crearSong = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, artist, album, year, genre, duration } = req.body;

        await prisma.song.create({
            data: {
                name,
                artist,
                album,
                year,
                genre,
                duration
            },
        });

        res.status(201).json({
            ok: true,
            message: "Song creado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error,
        })
    }
};