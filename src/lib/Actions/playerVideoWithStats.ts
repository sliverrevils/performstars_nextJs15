import { fixDBRes } from "../../../utils/funcs";
import { IChamp } from "../MongoDb/Models/Champ";
import { IPlayer } from "../MongoDb/Models/Player";
import { IShot } from "../MongoDb/Models/Shot";
import { IVideo, Video } from "../MongoDb/Models/Video";
import { connectDBPool } from "../MongoDb/mongodb";
import { getEventsFromArrayIds } from "./champ";
import { getPlayersFromArray } from "./player";
import { getShotsByVideoId } from "./shot";

export async function getPlayerVideosWithStats({ playerId }: { playerId: string }): Promise<{
    videos: IVideo[];
    events: IChamp[];
    players: IPlayer[];
    videosShots: (string | IShot[])[][];
}> {
    try {
        await connectDBPool();
        const videos = fixDBRes<IVideo[]>(
            await Video.find({ players: { $elemMatch: { $eq: playerId } } })
                .sort({ date: -1 })
                .limit(10)
        );

        const eventsIdsInVideos = [...new Set(videos.map((video) => video.champ).filter((video) => !!video))] as string[];
        const playersIdsInVideos = [
            ...new Set(
                videos
                    .map((video) => video.players!)
                    .flat()
                    .filter((player) => !!player)
            ),
        ];
        const events = fixDBRes<IChamp[]>(await getEventsFromArrayIds({ eventsArr: eventsIdsInVideos }));
        const players = fixDBRes<IPlayer[]>(await getPlayersFromArray({ playersArr: playersIdsInVideos }));
        const videosShots = await Promise.all(videos.map(async (video) => [`${video._id}`, fixDBRes<IShot[]>(await getShotsByVideoId({ videoId: video._id }))]));

        return {
            videos,
            events,
            players,
            videosShots,
        };
    } catch (error) {
        console.log("❌ERROR DB player video with stats❌", error);
        return {
            videos: [],
            events: [],
            players: [],
            videosShots: [],
        };
    }
}
