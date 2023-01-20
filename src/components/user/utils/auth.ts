import { compare, genSalt, hash } from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
    const salt = await genSalt(12);
    return hash(password, salt);
}

export async function comparePassword(plaintextPassword: string, hash:any) {
    const result = await compare(plaintextPassword, hash);
    return result;
}