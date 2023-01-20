import { compare, genSalt, hash } from "bcrypt";
import jwt from "jsonwebtoken"

export async function hashPassword(password: string): Promise<string> {
    const salt = await genSalt(12);
    return hash(password, salt);
}

export async function comparePassword(plaintextPassword: string, hash:any) {
    const result = await compare(plaintextPassword, hash);
    return result;
}

export function signJwt(payload:Object,options={}) {
    options ={
        expiresIn :86400, // 24 hours
    };
    const secret : any  = process.env.TOKEN_SECRET;
    return jwt.sign(payload,secret,options);
}

export function verifyJwt(token:string) {
    try {
        const secret : any  = process.env.TOKEN_SECRET;
        return jwt.verify(token,secret)

    } catch (error) {
        return null
    }
    
}