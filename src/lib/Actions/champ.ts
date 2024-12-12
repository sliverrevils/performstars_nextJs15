"use server";

import { fixDBRes } from "../../../utils/funcs";
import { Champ, IChamp } from "../MongoDb/Models/Champ";
import { connectDBPool } from "../MongoDb/mongodb";

export async function getAllChamps(): Promise<IChamp[]> {
    try {
        await connectDBPool();
        const champs = await Champ.find();
        return fixDBRes<IChamp[]>(champs);
    } catch (error) {
        console.log("❌CHAMPS DB ERROR❌", error);
        return [];
    }
}

export async function getChampById({ id }: { id: string }): Promise<IChamp | null> {
    try {
        await connectDBPool();
        const champ = await Champ.findById(id);
        return fixDBRes<IChamp>(champ);
    } catch (error) {
        console.log("❌CHAMPS DB ERROR❌", error);
        return null;
    }
}

export async function getPaginatedChampsAction({ page, limit, filter, filterFlag }: { page: number; limit: number; filter: string; filterFlag: string }): Promise<{ champs: IChamp[]; totalChamps: number; totalPages: number }> {
    const skip = (page - 1) * limit;
    try {
        await connectDBPool();
        const regFilter = new RegExp(`${filter}`, "i");

        const champs: IChamp[] = await Champ.find({ name: regFilter, ...(filterFlag ? { country: filterFlag } : {}) })
            .skip(skip)
            .limit(limit);
        //console.log(champs);
        const totalChamps = await Champ.countDocuments();
        const totalPages = Math.ceil(totalChamps / limit);
        return { champs: fixDBRes(champs), totalChamps, totalPages };
    } catch (error) {
        console.log("❌ MongoDb:Players error !", error);
        return { champs: [], totalChamps: 0, totalPages: 0 };
    }
}

export async function getChampsAllCountrys(): Promise<string[]> {
    try {
        await connectDBPool();
        const countrys = await Champ.distinct("country");
        return countrys;
    } catch (error) {
        return [];
    }
}

export async function getEventsFromArrayIds({ eventsArr }: { eventsArr: string[] }): Promise<IChamp[]> {
    try {
        await connectDBPool();
        const events = fixDBRes<IChamp[]>(await Champ.find({ _id: { $in: eventsArr } }));
        return events;
    } catch (error) {
        return [];
    }
}
