"use client";

import styles from "./champsList.module.scss";
import { countries } from "country-flags-svg";
import Link from "next/link";
import { IChamp } from "@/lib/MongoDb/Models/Champ";

export default function ChampItem({ champ }: { champ: IChamp }) {
    const country = countries.find((country) => country.iso2.toLocaleLowerCase() === champ?.country?.toLocaleLowerCase());
    console.log("Champ", champ);
    return (
        <Link href={`/events/${champ._id}`} style={{ textDecoration: "none" }}>
            <div className={styles.playerWrap}>
                <div className={styles.playerBlock}>
                    <div className={styles.avaBlock}>
                        <img src={champ.image || "/img/player-image-default-small.svg"} />
                    </div>

                    <div className={styles.nameStr}>{champ.name}</div>
                </div>

                <div className={styles.dates}>{new Date(champ.d!).toLocaleDateString()}</div>

                <div className={styles.shots}>{champ.game || 0}</div>

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
