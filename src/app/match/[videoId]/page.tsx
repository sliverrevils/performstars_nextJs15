import HistoryPath from "@/app/components/base/History/History";
import MatchLayout from "@/app/components/layouts/MatchLayout/MatchLayout";
import Player from "@/app/components/ui/Player/Player";
import { getChampById } from "@/lib/Actions/champ";
import { getPlayersFromArray } from "@/lib/Actions/player";
import { getShotsByVideoId } from "@/lib/Actions/shot";
import { getVideosById } from "@/lib/Actions/video";
import Image from "next/image";

export default async function Match({ params }: { params: Promise<{ videoId: string }> }) {
    const { videoId } = await params;

    const video = await getVideosById({ videoId });
    const shots = await getShotsByVideoId({ videoId });

    if (!video || !shots.length) return <div>Video or stats not found</div>;
    const event = video.champ ? (await getChampById({ id: video.champ })) || undefined : undefined;
    const [player1, player2] = await getPlayersFromArray({ playersArr: video.players! });
    // console.log(player1, player2);

    return (
        <>
            <HistoryPath lastPath={video.title} padding={16} />
            <MatchLayout event={event} video={video} players={[player1, player2]} />
            {/* <h1>Video: {video.title}</h1>
            <div>
                <div>
                    <Player player={player1} avaSize={130} /> vs <Player player={player2} avaSize={130} />
                </div>
            </div>
            <h2>src:{event?.image}</h2>
            {!!event && <Image src={event.image || "/img/player-image-default-small.svg"} width={100} height={100} alt="event" />}

            <pre>{JSON.stringify(shots, null, 2)}</pre> */}
        </>
    );
}
