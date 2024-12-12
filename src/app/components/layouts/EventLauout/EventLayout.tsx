"use client";
import { IChamp } from "@/lib/MongoDb/Models/Champ";
import { IPlayer } from "@/lib/MongoDb/Models/Player";
import { IVideo } from "@/lib/MongoDb/Models/Video";
import Image from "next/image";
import { ReactNode } from "react";
import TableList from "../../lists/List/TableList";
import styles from "./event.module.scss";
import HistoryPath from "../../base/History/History";
import { countries } from "country-flags-svg";
import Link from "next/link";

export default function EventLayout({ children, champ, videos, players }: { children?: ReactNode; champ: IChamp; videos: IVideo[]; players: IPlayer[] }) {
    console.log("Video", videos);
    return (
        <div className={styles.eventWrap}>
            <div>Event : {champ._id}</div>
            <div>{champ.name}</div>

            {champ.image && <Image src={champ.image} alt={champ.name} width={100} height={100} unoptimized />}

            <div className={styles.tableListBlock}>
                <div className={styles.tableTitle}>PAETICIPANTS</div>
                <TableList headers={["№", "Player", "Shots", "Index", "Country"]}>
                    {players.map((player, idx) => {
                        const country = countries.find((country) => country.iso2.toLocaleLowerCase() === player?.country?.toLocaleLowerCase());
                        return (
                            <tr key={player._id + "event_list"}>
                                <td style={{ textAlign: "center" }}>{idx + 1}</td>
                                <td>
                                    <div className={styles.playerBlock}>
                                        <Image src={player.avatar200 || player.avatar400 || "/img/player-image-default-small.svg"} width={45} height={45} alt={player.name} style={{ borderRadius: "50%" }} />
                                        <div>{player.name}</div>
                                    </div>
                                </td>
                                <td style={{ textAlign: "center" }}>0</td>
                                <td style={{ textAlign: "center" }}>0</td>
                                <td width={200}>
                                    <div className={styles.playerBlock}>
                                        <Image src={country?.flag || ""} width={27} height={17} alt={country?.name || "unknown"} />
                                        <div>{country?.demonym}</div>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </TableList>
            </div>

            <div className={styles.tableListBlock}>
                <div className={styles.tableTitle}>LIST OF MATCHES</div>
                <TableList headers={["Round/Race", "Players", "Date", "Actions"]}>
                    {videos.map((video, idx) => {
                        const getPlayers = (playersArr: string[] | undefined) => {
                            if (!playersArr) return <div> undefined</div>;
                            const [p1Id, p2Id] = playersArr;
                            const player1 = players.find((player) => player._id === p1Id);
                            const player2 = players.find((player) => player._id === p2Id);
                            if (!player1 || !player2) return <div>player not found</div>;

                            return (
                                <div className={styles.opponentsBlock}>
                                    <div className={styles.playerBlock}>
                                        <div>{player1.name}</div>
                                        <Image src={player1.avatar200 || player1.avatar400 || "/img/player-image-default-small.svg"} width={45} height={45} alt={player1.name} style={{ borderRadius: "50%" }} />
                                    </div>
                                    <div className={styles.vsBlock}>
                                        <span>
                                            {video.score?.[0]} : {video.score?.[1]}
                                        </span>
                                        <span>vs</span>
                                    </div>
                                    <div className={styles.playerBlock}>
                                        <Image src={player2.avatar200 || player2.avatar400 || "/img/player-image-default-small.svg"} width={45} height={45} alt={player2.name} style={{ borderRadius: "50%" }} />
                                        <div>{player2.name}</div>
                                    </div>
                                </div>
                            );
                        };
                        return (
                            <tr key={video._id} className={styles.matchItem}>
                                <td style={{ textAlign: "center" }}>{`${idx + 1} / ${videos.length}`}</td>
                                <td style={{ textAlign: "center" }}>{getPlayers(video.players)}</td>
                                <td style={{ textAlign: "center" }}>{new Date(String(video.date)).toDateString()}</td>
                                <td>
                                    <div className={styles.actionsBlock}>
                                        <Link href={"/match-stats/xxx"} className={styles.statsBtn}>
                                            <Image src="/icons/bar_chart.svg" width={25} height={24} alt="chars" />
                                        </Link>
                                        <Link href={video.url!} target="_blank">
                                            <Image src="/icons/youtube.svg" alt="youtube" width={30} height={30} />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </TableList>
            </div>
        </div>
    );
}
