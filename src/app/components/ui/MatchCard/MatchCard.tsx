"use client";
import Image from "next/image";
import styles from "./matchCard.module.scss";
import { useEffect } from "react";
import { findFullCountry } from "../../../../../utils/funcs";
import { IPlayer } from "@/lib/MongoDb/Models/Player";
import Player from "../Player/Player";

export default function MatchCard({ imgSrc, title, date, country, players, score }: { imgSrc: string | undefined; title: string; date: string; country: string | undefined; players: IPlayer[]; score: string }) {
    useEffect(() => {
        if (document) {
        }
    }, []);
    return (
        <div className={styles.matchWrap}>
            <div className={styles.imageBlock}>
                <Image src={"/svg/ChampBig.svg"} width={142} height={224} alt="event" />
            </div>
            <div className={styles.titleBlock}>
                <span>{title}</span>
            </div>
            <div className={styles.dateBlock}>
                <div>{date}</div>
                {country && <Image src={findFullCountry(country)?.flag!} width={28} height={20} alt="flag" />}
            </div>
            <div className={styles.opponentsBlock}>
                <Player player={players[0]} avaSize={100} />
                <div className={styles.score}>{score}</div>
                <Player player={players[1]} avaSize={100} />
            </div>
            <div>stats list</div>
        </div>
    );
}
