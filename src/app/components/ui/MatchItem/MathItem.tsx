import { IVideo } from "@/lib/MongoDb/Models/Video";
import styles from "./matchItem.module.scss";
import { IPlayer } from "@/lib/MongoDb/Models/Player";
import Player from "../Player/Player";
import Image from "next/image";
import { iCountryFull } from "../../../../../types/types";
import { IShot } from "@/lib/MongoDb/Models/Shot";

export function MatchItem({ video, player1, player2, title, date, country, shotsP1, shotsP2 }: { video: IVideo; player1: IPlayer | undefined; player2: IPlayer | undefined; title: string; date: string | undefined; country: iCountryFull | undefined; shotsP1: IShot[]; shotsP2: IShot[] }) {
    return (
        <div className={styles.matchWrap}>
            <div className={styles.opponentsBlock}>
                <Player player={player1!} avaSize={100} />
                <div className={styles.scoresBlock}>
                    {video.score?.[0] || "?"} : {video.score?.[1] || "?"}
                </div>
                <Player player={player2!} avaSize={100} />
            </div>
            <div className={styles.eventBlock}>
                <Image src={"/svg/Champ.svg"} width={37} height={54} alt="champ" />
                <div className={styles.titleBlock}>
                    <div className={styles.title}>{title}</div>
                    {date && <div className={styles.date}>{date}</div>}
                </div>
                <div className={styles.coutryBlock}>{country && <Image src={country.flag} width={38} height={20} alt={country.name} />}</div>
            </div>
            <div className={styles.statsBlock}></div>
        </div>
    );
}
