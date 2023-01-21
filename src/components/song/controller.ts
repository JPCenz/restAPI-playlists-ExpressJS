import type { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { verifyJwt } from "../user/utils/auth";
import { getBearerToken } from "../user/utils/auth";
import { Payload } from "@prisma/client/runtime";

const prisma = new PrismaClient();

export const listarSong = async (req: Request, res: Response): Promise<void> => {
    try {
        const songs = await prisma.song.findMany({
            where: { is_public: true },
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

export const listarSongPrivate = async (req: Request, res: Response,next:NextFunction): Promise<any> => {
    const authHeader: string = req.headers['authorization'] ?? "";
    const token = getBearerToken(authHeader);
    const payload  = verifyJwt(token);
    if (!payload) {
        console.log(token);
        return next()
    };
    try {
        const songs = await prisma.song.findMany({
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

export const crearSong = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, artist, album, year, genre, duration, is_public } = req.body;

        await prisma.song.create({
            data: {
                name,
                artist,
                album,
                year,
                genre,
                duration,
                is_public
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