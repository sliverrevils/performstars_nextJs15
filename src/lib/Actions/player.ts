"use server";

import { fixDBRes } from "../../../utils/funcs";
import Player, { IPlayer } from "../MongoDb/Models/Player";
import { connectDBPool } from "../MongoDb/mongodb";

//import { connectDBPerformstars } from "../MongoDb/mongodb";

export async function getAllPlayersAction(): Promise<IPlayer[]> {
    try {
        await connectDBPool();

        const players: IPlayer[] = JSON.parse(JSON.stringify(await Player.find({})));
        return players;
    } catch (error) {
        console.log("❌ MongoDb:Players error !", error);
        return [];
    }
}
export async function findByIdPlayerAction({ id }: { id: string }): Promise<IPlayer | undefined> {
    try {
        await connectDBPool();

        const player: IPlayer = JSON.parse(JSON.stringify(await Player.findById(id)));
        return player;
    } catch (error) {
        console.log("❌ MongoDb:Player by id error !", error);
        return undefined;
    }
}

export async function getPaginatedPlayersAction({ page, limit, filter, filterFlag }: { page: number; limit: number; filter: string; filterFlag: string }): Promise<{ players: IPlayer[]; totalPlayers: number; totalPages: number }> {
    const skip = (page - 1) * limit;
    try {
        await connectDBPool();
        const regFilter = new RegExp(`^${filter}`, "i");

        const players: IPlayer[] = JSON.parse(
            JSON.stringify(
                await Player.find({ name: regFilter, ...(filterFlag ? { country: filterFlag } : {}) })
                    .skip(skip)
                    .limit(limit)
            )
        );
        const totalPlayers = await Player.countDocuments();
        const totalPages = Math.ceil(totalPlayers / limit);
        return { players, totalPlayers, totalPages };
    } catch (error) {
        console.log("❌ MongoDb:Players error !", error);
        return { players: [], totalPlayers: 0, totalPages: 0 };
    }
}

export async function getPlayersAllCountrys(): Promise<string[]> {
    try {
        await connectDBPool();
        const countrys = await Player.distinct("country");
        return countrys;
    } catch (error) {
        return [];
    }
}

export async function getPlayersFromArray({ playersArr }: { playersArr: string[] }): Promise<IPlayer[]> {
    try {
        await connectDBPool();
        const players = fixDBRes<IPlayer[]>(await Player.find({ _id: { $in: playersArr } }));
        return players;
    } catch (error) {
        return [];
    }
}
