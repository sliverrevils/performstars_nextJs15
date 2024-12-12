import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPlayer extends Document {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    alias: string;
    avatar: string | undefined;
    avatar200: string | undefined;
    avatar400: string | undefined;
    awards: any[] | undefined;
    country: string;
    date: string | undefined;
    game: string;
    image: string | undefined;
    insta: string | undefined;
    isLastUpdateChanged: string | undefined;
    name: string;
    name2: string;
    name3: string | undefined;
    nationality: string | undefined;
    nikname: string | undefined;
    proc: boolean | undefined;
    proceed: boolean;
    raiting: number | undefined;
    rate: number;
    rate19: number | undefined;
    rate20: number | undefined;
    rate21: number | undefined;
    rate22: number | undefined;
    rects: (string | number)[] | undefined;
    shots: number;
    shots19: number;
    shots20: number;
    shots21: number;
    shots22: number;
    shotsarr: any[] | undefined;
    shotstime: number | undefined;
    shotstimearr: any[] | undefined;
    status: string | undefined;
    ststus: string | undefined;
    tabletime: number | undefined;
    tabletimearr: any[] | undefined;
    temp: number | undefined;
    type: string;
    user: string | undefined;
    verified: boolean | undefined;
    videos: string[] | undefined;
}

const playerSchema = new Schema<IPlayer>({
    _id: { type: String, required: true },
    alias: { type: String, required: true },
    avatar: { type: String, required: false },
    avatar200: { type: String, required: false },
    avatar400: { type: String, required: false },
    awards: { type: [Schema.Types.Mixed], required: false },
    country: { type: String, required: true },
    date: { type: String, required: false },
    game: { type: String, required: true },
    image: { type: String, required: false },
    insta: { type: String, required: false },
    isLastUpdateChanged: { type: String, required: false },
    name: { type: String, required: true },
    name2: { type: String, required: true },
    name3: { type: String, required: false },
    nationality: { type: String, required: false },
    nikname: { type: String, required: false },
    proc: { type: Boolean, required: false },
    proceed: { type: Boolean, required: true },
    raiting: { type: Number, required: false },
    rate: { type: Number, required: true },
    rate19: { type: Number, required: false },
    rate20: { type: Number, required: false },
    rate21: { type: Number, required: false },
    rate22: { type: Number, required: false },
    rects: { type: [Schema.Types.Mixed], required: false },
    shots: { type: Number, required: true },
    shots19: { type: Number, required: true },
    shots20: { type: Number, required: true },
    shots21: { type: Number, required: true },
    shots22: { type: Number, required: true },
    shotsarr: { type: [Schema.Types.Mixed], required: false },
    shotstime: { type: Number, required: false },
    shotstimearr: { type: [Schema.Types.Mixed], required: false },
    status: { type: String, required: false },
    ststus: { type: String, required: false },
    tabletime: { type: Number, required: false },
    tabletimearr: { type: [Schema.Types.Mixed], required: false },
    temp: { type: Number, required: false },
    type: { type: String, required: true },
    user: { type: String, required: false },
    verified: { type: Boolean, required: false },
    videos: { type: [String], required: false },
});

const Player: Model<IPlayer> = mongoose.models.Player || mongoose.model<IPlayer>("Player", playerSchema);

export default Player;
