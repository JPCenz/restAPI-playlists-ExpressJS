import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const helloWorld = async (req: Request, res: Response): Promise<void> => {
    res.status(201).json(
        {
            "Router": "User"
        }
    );
};