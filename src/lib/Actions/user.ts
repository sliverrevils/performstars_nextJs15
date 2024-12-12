"use server";

import User, { IUser } from "../MongoDb/Models/User";
import { connectDBPool } from "../MongoDb/mongodb";
//import { connectDBPerformstars } from "../MongoDb/mongodb";

export async function getAllUsers(): Promise<IUser[] | null> {
    try {
        await connectDBPool();
        const users: IUser[] = JSON.parse(JSON.stringify(await User.find({})));

        return users;
    } catch (error) {
        return null;
    }
}
