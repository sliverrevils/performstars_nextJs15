import Image from "next/image";
import HistoryPath from "../components/base/History/History";
import InfoBlock from "../components/ui/InfoBlock/InfoBlock";
import styles from "./crit.module.scss";
import Link from "next/link";

export default function Criteria() {
    return (
        <>
            <HistoryPath padding={16} />
            <div className={styles.criteriaWrap}>
                <div className={styles.criteriaBlock}>
                    <div className={styles.textBlock}>
                        <div>Our mission is to provide every billiard player a personal dashboard evaluating their level and skill dynamics</div>
                        <div>In order to be able to make valid statements about technical skill we defined several criteria that describe skill level in terms of quality and quantity. These criteria are to become an important guideline at the practice regime of an athlete and also a tool for coaches and individuals which helps to develop players skills.</div>
                    </div>
                    <InfoBlock title="Criteria of technical skill">
                        <div className={styles.blockRPic}>
                            <p className={styles.info}>
                                <b>Ball pocketing</b>
                                <span>Ratio of balls pocketed to total number of attacking shots. Measured in percent, 0 to 100%. Balls pocketed unintentionally are not considered, neither are safeties and break shots, but balls made on a foul are considered</span>
                            </p>
                            <Image src="/img/pages/potting-ico.png" width={100} height={100} alt="potting" />
                        </div>
                        <div className={styles.blockRPic}>
                            <p className={styles.info}>
                                <b>Break shot quality</b>
                                <span>Ratio of successful break shots to total number of break shot attempts. Measured in percent, 0 to 100%. A break shot is successful if at least one ball was pocketed and the player’s inning continued</span>
                            </p>
                            <Image src="/img/pages/break-ico.png" width={100} height={100} alt="potting" />
                        </div>
                        <div className={styles.blockRPic}>
                            <p className={styles.info}>
                                <b>Runouts</b>
                                <span>
                                    Ratio of runouts to total number of racks played. Measured in percent, 0 to 100%. Runout is a situation where a player stays at the table pocketing all the balls required to win a rack, without the opponent getting a visit at the table. Here not only break and runs are considered but also those racks where the player’s opponent made first (unsuccessful) shot.
                                </span>
                            </p>
                            <Image src="/img/pages/run-out-ico.png" width={100} height={100} alt="potting" />
                        </div>
                        <div className={styles.blockRPic}>
                            <p className={styles.info}>
                                <b>Average run</b>
                                <span>Average number of balls pocketed by the player per inning. Calculated as a ratio of total balls pocketed to total number of innings </span>
                            </p>
                            <Image src="/img/pages/run-ico.png" width={100} height={100} alt="potting" />
                        </div>
                        <div className={styles.blockRPic}>
                            <p className={styles.info}>
                                <b>Safeties</b>
                                <span>Ratio of successful safety shots to total number of safety shots attempted. Measured in percent, 0 to 100%. A safety shot is considered to be successful if:</span>
                                <ul>
                                    <li>the player’s opponent committed a foul after such a safety;</li>
                                    <li>the player did not leave his opponent an open table</li>
                                </ul>
                            </p>
                            <Image src="/img/pages/safety-ico.png" width={100} height={100} alt="potting" />
                        </div>
                        <div className={styles.blockRPic}>
                            <p className={styles.info}>
                                <b>Position play</b>
                                <span>Integral value which reflects position play success by three quotients. It denotes the difference between average run and average complexity rate for a certain ball being played.</span>
                                <span>An important role in calculation of this goes to the average run, as it is directly linked to cue ball control skills. Average shot complexity is deducted from average run by three aforementioned factors. There is a possibility that this criterion value could turn negative if average run of a player is pretty low.</span>
                            </p>
                            <Image src="/img/pages/leave-ico.png" width={100} height={100} alt="potting" />
                        </div>
                    </InfoBlock>
                    <InfoBlock title="Rating">
                        <div className={styles.blockRPic}>
                            <p className={styles.info}>
                                <b>Ball pocketing</b>
                                <span>Ratio of balls pocketed to total number of attacking shots. Measured in percent, 0 to 100%. Balls pocketed unintentionally are not considered, neither are safeties and break shots, but balls made on a foul are considered</span>
                            </p>
                            <Image src="/img/pages/rate-ico.png" width={100} height={100} alt="potting" />
                        </div>
                    </InfoBlock>
                    <InfoBlock title="Individual performance">
                        <span className={styles.blockLPic}>
                            <b>Average shot duration</b>
                            <p className={styles.info}>
                                <Image src="/img/pages/time-ico.png" width={60} height={60} alt="time" />
                                <span>
                                    Average time per shot, as measured in seconds. It includes time a player takes to approach the table and evaluate the layout. It ends when all balls come to rest after the shot is completed. Shot duration could be unusually long which is caused by a tricky layout or poor position play, depending on the previous shot. Short shot duration usually takes place when
                                    the layout is simple and clear and the player feels confident.
                                </span>
                            </p>
                        </span>

                        <span className={styles.blockLPic}>
                            <b>Average shot speed</b>
                            <p className={styles.info}>
                                <Image src="/img/pages/force-ico.png" width={60} height={60} alt="time" />
                                <span>With this parameter one could evaluate the style of play, either soft or aggressive. And therefore it is possible to see which tactics the player prefers in terms of cue ball control.</span>
                            </p>
                        </span>
                        <span className={styles.blockLPic}>
                            <b>Average shot distance</b>
                            <p className={styles.info}>
                                <Image src="/img/pages/dist-ico.png" width={60} height={60} alt="time" />
                                <span>With this parameter one could evaluate the style of play, either soft or aggressive. And therefore it is possible to see which tactics the player prefers in terms of cue ball control.</span>
                            </p>
                        </span>
                        <span className={styles.blockLPic}>
                            <b>Average shot complexity</b>
                            <p className={styles.info}>
                                <Image src="/img/pages/hard-ico.png" width={60} height={60} alt="time" />
                                <span>
                                    Non-dimensional value which is calculated only for attacking shots, regardless of the ball being pocketed or not. This parameter provides evaluation of the playing style and the player's strategy. The higher average shot complexity, the worse the cue ball control. Otherwise average shot complexity would have tended to get lower for the reason of good position
                                    play.
                                </span>
                            </p>
                        </span>
                    </InfoBlock>
                    <div className={styles.textBlock} style={{ display: "block" }}>
                        Learn more about the approach to shot complexity calculation at the <Link href="/statistics">shot statistics page</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
