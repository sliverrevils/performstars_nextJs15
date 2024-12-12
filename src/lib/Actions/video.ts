import { fixDBRes } from "../../../utils/funcs";
import { IVideo, Video } from "../MongoDb/Models/Video";
import { connectDBPool } from "../MongoDb/mongodb";

export async function getVideosByChampId({ champId }: { champId: string }): Promise<IVideo[]> {
    try {
        await connectDBPool();
        const videos = await Video.find({ champ: champId }).sort({ date: 1 });
        return fixDBRes<IVideo[]>(videos);
    } catch (error) {
        console.log("❌VIDEO DB ERROR❌", error);
        return [];
    }
}
export async function getVideosById({ videoId }: { videoId: string }): Promise<IVideo | null> {
    try {
        await connectDBPool();
        const video = await Video.findById(videoId);
        return fixDBRes<IVideo>(video);
    } catch (error) {
        console.log("❌VIDEO DB ERROR❌", error);
        return null;
    }
}

export async function getLatestVideo({ limit = 10 }: { limit?: number } = {}): Promise<IVideo[]> {
    try {
        await connectDBPool();
        const latestVideos = await Video.find({
            $or: [
                //{ players: { $exists: false } }, // Поле players отсутствует
                {
                    players: {
                        $elemMatch: { $not: { $eq: "" } }, // В массиве нет пустых строк
                    },
                },
            ],
            // Проверяем, что строки не пустые
        })
            .sort({
                _updatedAt: -1,
            })
            .limit(limit);
        //console.log("latestVideos", latestVideos);
        return fixDBRes<IVideo[]>(latestVideos);
    } catch (error) {
        console.log("❌VIDEO DB ERROR❌", error);
        return [];
    }
}
