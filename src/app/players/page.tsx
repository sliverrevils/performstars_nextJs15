import HistoryPath from "../components/base/History/History";
import PlayerList from "../components/lists/PlayerList/PlayerList";

export default function Players() {
    return (
        <>
            <HistoryPath padding={16} />
            <PlayerList />
        </>
    );
}
