import HistoryPath from "@/app/components/base/History/History";
import PlayerLayout from "@/app/components/layouts/PlayerLayout/PlayerLayout";
import { MatchItem } from "@/app/components/ui/MatchItem/MathItem";
import { findByIdPlayerAction } from "@/lib/Actions/player";
import { getPlayerVideosWithStats } from "@/lib/Actions/playerVideoWithStats";
import { IVideo } from "@/lib/MongoDb/Models/Video";
import { findFullCountry, findPlayerInPlayers } from "../../../../utils/funcs";
import styles from "./players.module.scss";
import { IShot } from "@/lib/MongoDb/Models/Shot";
import { getPlayerAllShotsCount } from "@/lib/Actions/shot";

export default async function PlayerPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const currentPlayer = await findByIdPlayerAction({ id });

    if (!currentPlayer) {
        return <div>Player not found</div>;
    }
    //
    const { shotsCount } = await getPlayerAllShotsCount({ playerId: id });
    const { videos, players, events, videosShots } = await getPlayerVideosWithStats({ playerId: id });
    return (
        <>
            <HistoryPath lastPath={currentPlayer.name} padding={16} />
            <PlayerLayout player={currentPlayer} shotsCount={shotsCount}>
                <div className={styles.matchesWrap}>
                    {videos.map((video) => {
                        const [player1, player2] = video.players!.map((playerId) => findPlayerInPlayers({ playerId, players }));
                        const event = events.find((event) => event._id === video.champ);
                        const title = event?.name || event?.name2 || video.title || "unknown video or event";
                        const date = video.date ? new Date(video.date).toLocaleDateString() : undefined;
                        const country = event?.country ? findFullCountry(event.country) : undefined;
                        const currentVideoShotsItem = videosShots ? videosShots.find((arr) => arr[0] === video._id) : [];
                        const curShots = currentVideoShotsItem ? (currentVideoShotsItem[1] as IShot[]) : [];

                        const shotsP1 = curShots.filter((shot) => shot.player === player1?._id);
                        const shotsP2 = curShots.filter((shot) => shot.player === player2?._id);
                        // console.log({ shotsP1, shotsP2 });

                        return <MatchItem video={video} player1={player1} player2={player2} title={title} date={date} country={country} shotsP1={shotsP1} shotsP2={shotsP2} />;
                    })}
                </div>
            </PlayerLayout>
        </>
    );
}
