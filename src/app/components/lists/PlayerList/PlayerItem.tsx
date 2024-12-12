"use client";

import { IPlayer } from "@/lib/MongoDb/Models/Player";
import styles from "./playerList.module.scss";
import { countries } from "country-flags-svg";
import Link from "next/link";

export default function PlayerItem({ player }: { player: IPlayer }) {
    const country = countries.find((country) => country.iso2.toLocaleLowerCase() === player?.country?.toLocaleLowerCase());
    // console.log("Shots", player.shots);
    return (
        <Link href={`/players/${player._id}`} style={{ textDecoration: "none" }}>
            <div className={styles.playerWrap}>
                {/* <div>{number}</div> */}
                <div className={styles.playerBlock}>
                    <div className={styles.avaBlock}>
                        <img src={player.avatar200 || player.avatar400 || "/img/player-image-default-small.svg"} />
                    </div>

                    <div className={styles.nameStr}>{player.name}</div>
                </div>

                <div className={styles.shots}>{player.shots || 0}</div>

                <div className={styles.countryBlock}>
                    {country?.flag && (
                        <div className={styles.flagBlock}>
                            <img src={country?.flag} />
                        </div>
                    )}
                    <div className={styles.countryStr}>{country?.demonym || "unknown"}</div>
                </div>
            </div>
        </Link>
    );
}
