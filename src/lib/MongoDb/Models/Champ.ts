import mongoose, { Model } from "mongoose";

export interface IChamp {
    _id: string;
    _createdAt: string | undefined;
    alias: string;
    author: string | undefined;
    country: string;
    d: string | undefined;
    date: string | undefined;
    end: string | undefined;
    game: string | undefined;
    image: string | undefined;
    name: string;
    name2: string | undefined;
    status: string | undefined;
    tableSize: string | undefined;
    team: string | undefined;
    type: string;
}

export const Champ: Model<IChamp> = mongoose.models.Champ || mongoose.model<IChamp>("Champ", new mongoose.Schema({ _id: { type: String, required: true } }, { strict: false }));
