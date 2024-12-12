"use server";

import { fixDBRes } from "../../../utils/funcs";
import Shot, { IShot } from "../MongoDb/Models/Shot";
import { connectDBPool } from "../MongoDb/mongodb";

export async function getAllPlayerShots({ playerId }: { playerId: string }): Promise<IShot[]> {
    await connectDBPool();
    try {
        const shots = await Shot.find({ player: "playerId" }).lean<IShot[]>();
        return shots;
    } catch (error) {
        return [];
    }
}

export async function getShotsByVideoId({ videoId }: { videoId: string }): Promise<IShot[]> {
    await connectDBPool();
    try {
        const shots = await Shot.find({ video: videoId });
        return fixDBRes<IShot[]>(shots);
    } catch (error) {
        return [];
    }
}

export async function getPlayerAllShotsCount({ playerId }: { playerId: string }) {
    try {
        const shots = await Shot.find({ player: playerId });
        console.log("COUNT SHOTS", shots);
        return { shotsCount: shots.length };
    } catch (error) {
        return {
            shotsCount: 0,
        };
    }
}
