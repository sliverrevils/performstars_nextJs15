import { ReactNode } from "react";
import styles from "./matchLayout.module.scss";
import { IChamp } from "@/lib/MongoDb/Models/Champ";
import MatchCard from "../../ui/MatchCard/MatchCard";
import { IVideo } from "@/lib/MongoDb/Models/Video";
import { IPlayer } from "@/lib/MongoDb/Models/Player";

export default function MatchLayout({ children, event, video, players }: { children?: ReactNode; event: IChamp | undefined; video: IVideo; players: IPlayer[] }) {
    const champTitle = event?.name || video.title || "unknown video";
    const date = new Date(String(video.date));
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
    });
    const country = event?.country;
    const score = `${video.score?.[0] || "?"}:${video.score?.[1] || "?"}`;
    return (
        <div className={styles.matchLayoutWrap}>
            <div className={styles.matchContent}>
                <div className={styles.matchInfoSide}>
                    <MatchCard imgSrc={event?.image} title={champTitle} date={formattedDate} country={country} players={players} score={score} />
                </div>
                <div className={styles.matchRightSide}>right</div>
            </div>
        </div>
    );
}
