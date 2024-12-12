import { getLatestVideo } from "@/lib/Actions/video";
import LatestVideosList from "./components/lists/LatestVideosList/LatestVideosList";
import HomeSlider from "./components/common/HomeSlider/HomeSlider";
import { getPlayersFromArray } from "@/lib/Actions/player";
import { getEventsFromArrayIds } from "@/lib/Actions/champ";

export default async function Home() {
    const latest = await getLatestVideo({ limit: 10 });
    const playersArr = latest.reduce<string[]>((acc, video) => (video.players ? [...new Set([...acc, ...video.players])] : acc), []);
    const eventsArr = latest.reduce<string[]>((acc, video) => (video.champ ? [...new Set([...acc, video.champ])] : acc), []);
    const players = await getPlayersFromArray({ playersArr });
    const events = await getEventsFromArrayIds({ eventsArr });
    console.log("EVENTS LIST", eventsArr, events);
    return (
        <>
            <LatestVideosList videoList={latest} players={players} events={events} />
        </>
    );
}
