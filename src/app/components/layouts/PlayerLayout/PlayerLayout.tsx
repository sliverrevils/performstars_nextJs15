"use client";
import Link from "next/link";

import styles from "./playerLayout.module.scss";
import dynamic from "next/dynamic";

import { ReactNode, useState } from "react";
import HistoryPath from "../../base/History/History";
import PlayerCard from "../../ui/PlayerCard/PlayerCard";
import { IPlayer } from "@/lib/MongoDb/Models/Player";

export default function PlayerLayout({ children, player, shotsCount }: { children: ReactNode; player: IPlayer; shotsCount: number }) {
    const [infoChoose, setInfoChoose] = useState("games");
    // console.log("Player ➡️", player);
    return (
        <div className={styles.playerLayoutWrap}>
            <div className={styles.playerContent}>
                <div className={styles.playerInfoSide}>
                    <PlayerCard player={player} shotsCount={shotsCount} />
                    <div className={styles.infoChoose}>
                        <div className={`${styles.chooseItem} ${infoChoose === "games" ? styles.selected : ""}`} onClick={() => setInfoChoose("games")}>
                            Feed
                        </div>
                        <div className={`${styles.chooseItem} ${infoChoose === "info" ? styles.selected : ""}`} onClick={() => setInfoChoose("info")}>
                            Stats
                        </div>
                    </div>
                    <div className={`${styles.playerGraphsBlock} ${infoChoose === "info" ? styles.selectedBlock : ""}`}> Graphs</div>
                </div>
                <div className={`${styles.playerGamesSide} ${infoChoose === "games" ? styles.selectedBlock : ""} `}>{children}</div>
            </div>
        </div>
    );
}
