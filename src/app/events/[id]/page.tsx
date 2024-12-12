import HistoryPath from "@/app/components/base/History/History";
import EventLayout from "@/app/components/layouts/EventLauout/EventLayout";

import { getChampById } from "@/lib/Actions/champ";
import { findByIdPlayerAction, getPlayersFromArray } from "@/lib/Actions/player";
import { getVideosByChampId } from "@/lib/Actions/video";

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const currentChamp = await getChampById({ id });
    const currentVideos = await getVideosByChampId({ champId: id });

    const playersArr = currentVideos.reduce<string[]>((acc, video) => (video.players ? [...new Set([...acc, ...video.players])] : acc), []);
    const players = await getPlayersFromArray({ playersArr });

    //console.log(players);

    if (!currentChamp) {
        return <div>Champ not found</div>;
    }
    if (!currentVideos) {
        return <div>Video not found</div>;
    }
    return (
        <>
            <HistoryPath padding={16} lastPath={currentChamp.name} />
            <EventLayout champ={currentChamp} videos={currentVideos} players={players} />
        </>
    );
}
