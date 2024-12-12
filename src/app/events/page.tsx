import { getAllChamps } from "@/lib/Actions/champ";
import HistoryPath from "../components/base/History/History";
import ChampsList from "../components/lists/ChampList/ChampList";

export default async function Events() {
    return (
        <>
            <HistoryPath padding={16} />
            <ChampsList />
        </>
    );
}
