import { IPlayer } from "@/lib/MongoDb/Models/Player";
import styles from "./playerCard.module.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import dayjs from "dayjs";
import Image from "next/image";

export default function PlayerCard({ player, shotsCount }: { player: IPlayer; shotsCount: number }) {
    // console.log("Player ➡️", player);
    const percentage = 85;
    const verifiedIco = (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white">
            <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
        </svg>
    );
    return (
        <div className={styles.playerWrap}>
            <div className={styles.backPhoto}>
                <img src="/img/balls.jpg" />
            </div>
            <div className={styles.avaBlock}>
                <Image src={player.avatar400 || player.avatar200 || "/img/player-image-default-small.svg"} alt={player.name} className={styles.img} width={200} height={100} />
            </div>
            <div className={styles.infoBlock}>
                <div className={styles.nameBlock}>
                    <span>{player.name} </span>
                    <span>{verifiedIco} </span>
                </div>

                <div className={styles.fromBlock}>
                    {/* `<i class={`fflag ff-md fflag-${player.country}`}></i>` */}
                    <span>{player.country}</span>
                </div>
                <div className={styles.info}>Male, {dayjs().diff(player.date, "years")}</div>
                <div className={styles.about}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo praesentium architecto voluptate vel, porro quia laborum, quibusdam fuga in veritatis dolorem quaerat rem deserunt reprehenderit repellat sunt consequuntur pariatur quo!</div>
                <div className={styles.contact}>
                    <a href="">https://t.me/victorgorban2</a>
                </div>
            </div>
            <div className={styles.statsBlock}>
                <div className={styles.statItemGraph}>
                    <div style={{ width: 50, height: 50 }}>
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                                pathColor: `rgba(124, 77, 255, ${percentage / 100})`,
                                textColor: "#7C4DFF",
                                trailColor: "#d6d6d6",
                                textSize: 25,
                                // strokeWidth: 8,
                            })}
                        />
                    </div>
                    <div className={styles.statNameBlock}>
                        <span className={styles.statName}>Accuracy</span>
                        <span className={styles.statInfo}>made / miss</span>
                    </div>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statName}>Level</span>
                    <span className={styles.statValue}>
                        {
                            0
                            //  player.stats.currentSeasonPlace
                        }
                    </span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statName}>Shots</span>
                    <span className={styles.statValue}>
                        {
                            shotsCount
                            // player.stats.currentSeasonShots
                        }
                    </span>
                </div>
            </div>
        </div>
    );
}
