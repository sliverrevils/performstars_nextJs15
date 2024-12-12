"use client";
import { getPlayersFromArray } from "@/lib/Actions/player";
import { getLatestVideo } from "@/lib/Actions/video";
import { IPlayer } from "@/lib/MongoDb/Models/Player";
import { IVideo } from "@/lib/MongoDb/Models/Video";
import { useEffect, useState } from "react";
import TableList from "../List/TableList";
import styles from "./lastMathes.module.scss";
import Image from "next/image";
import Link from "next/link";
import Container from "../../common/Container/Container";
import { IChamp } from "@/lib/MongoDb/Models/Champ";

export default function LatestVideosList({ videoList, players, events }: { videoList: IVideo[]; players: IPlayer[]; events: IChamp[] }) {
    //console.log("VIDEO LIST", videoList);

    return (
        <Container>
            <div className={styles.lastMatchesWrap}>
                <div className={styles.titleBlock}>
                    <Image src={"/img/service/new.svg"} width={55} height={63} alt="new" />
                    <span className={styles.titleText}>
                        Last <span>10 matches</span>
                    </span>
                </div>
                <TableList headers={["Date", "Players", "Statistics", "Event"]}>
                    {videoList.map((video, idx) => {
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
                                        <div className={styles.scoreBlock}>
                                            <span> {video.score?.[0]} </span>
                                            <span> : </span>
                                            <span> {video.score?.[1]} </span>
                                        </div>
                                        <span>vs</span>
                                    </div>
                                    <div className={styles.playerBlock}>
                                        <Image src={player2.avatar200 || player2.avatar400 || "/img/player-image-default-small.svg"} width={45} height={45} alt={player2.name} style={{ borderRadius: "50%" }} />
                                        <div>{player2.name}</div>
                                    </div>
                                </div>
                            );
                        };

                        const getEventName = (champ: string | undefined) => {
                            if (!champ) return null;
                            const event = events.find((event) => event._id === champ);
                            if (!event) return null;

                            return event.name || event.name2;
                        };
                        return (
                            <tr key={video._id} className={styles.matchItem}>
                                <td style={{ textAlign: "center" }}>
                                    {new Date(String(video.date)).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </td>
                                <td style={{ textAlign: "center" }}>{getPlayers(video.players)}</td>

                                <td>
                                    <div className={styles.actionsBlock}>
                                        <Link href={`/match/${video._id}`} className={styles.statsBtn}>
                                            <Image src="/icons/bar_chart.svg" width={25} height={24} alt="chars" />
                                        </Link>
                                        <Link href={video.url!} target="_blank">
                                            <Image src="/icons/youtube.svg" alt="youtube" width={30} height={30} />
                                        </Link>
                                    </div>
                                </td>
                                <td>{getEventName(video.champ) || "unknown"}</td>
                            </tr>
                        );
                    })}
                </TableList>
            </div>
        </Container>
    );
}
