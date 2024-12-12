import Image from "next/image";
import HistoryPath from "../components/base/History/History";
import InfoBlock from "../components/ui/InfoBlock/InfoBlock";
import styles from "./stat.module.scss";
import Link from "next/link";

export default function Statistics() {
    return (
        <>
            <HistoryPath lastPath="Cooperation program" padding={16} />
            <div className={styles.statWrap}>
                <div className={styles.statBlock}>
                    <div className={styles.imgBlock}>
                        <Image src="/img/pages/table.png" width={830} height={535} alt="table" />
                    </div>

                    <InfoBlock title="Shot statistics">
                        <div>
                            <b>Shot outcome</b>
                            <p>For any attacking kind of a shot our AI algorithm automatically identifies the final outcome as either a pocketed ball or a miss. Shots that don't fall under attacking category are identified as safeties. The shot is considered to be attacking if a player has a feasible chance to pocket an object ball, which is backed up by the player's aggregate actions.</p>
                        </div>

                        <div>
                            <b>Cut angle</b>
                            <p>This is an angle between the direction of aiming line and the direction of object ball movement. 0 degrees corresponds to a straight shot, while 90 degrees is considered to be marginal and most severe cut angle (which in reality is about 85-88 degrees).</p>
                        </div>
                        <div>
                            <b>Shot speed</b>
                            <p>Speed is utilized by the player to drive the cue ball and transfer certain impact from the cue stick to the ball</p>
                        </div>
                        <div>
                            <b>Shot distance</b>
                            <p>Distance between the cue ball and the object ball (automatically measured in meters from video capture).</p>
                        </div>
                        <div>
                            <b>Distance to the pocket</b>
                            <p>Distance from the object ball to the pocket (automatically measured in meters from video capture).</p>
                        </div>
                        <div>
                            <b>Cue ball travel distance</b>
                            <p>Distance of cue ball travel after object ball contact (automatically measured in meters from video capture).</p>
                        </div>
                        <div>
                            <b>English</b>
                            <p>Spin direction applied to the cue ball by the player with the cue tip.</p>
                        </div>
                        <div>
                            <b>Shot duration</b>
                            <p>Number of seconds measured from the moment when all balls come to rest at the end of an inning of from the beginning of a shot up to the moment when all moving balls come to rest.</p>
                        </div>
                    </InfoBlock>

                    <InfoBlock title="Shot complexity">
                        <div className={styles.blockRPic}>
                            <p>
                                Shot complexity rating is calculated only for attacking shots, regardless of the shot outcome (i.e. no matter whether the ball was pocketed). The shot is considered to be attacking if a player has a feasible chance to pocket an object ball, which is backed up by the player's aggregate actions. Several parameters are taken into account: distance to an object ball,
                                distance to a pocket, cue ball travel distance (position), number of cushion contacts, type and speed of a shot, English if applied, any complications, location, shot direction, etc. Exact formula is not disclosed. We are constantly working to improve it. Our main task is to remove any subjective factors with the use of mathematical statistics in order to provide
                                unified and fact-based analysis of shots complexity.
                            </p>
                            <Image src="/img/pages/hard-1-ico.png" width={100} height={100} alt="potting" />
                        </div>
                    </InfoBlock>
                </div>
            </div>
        </>
    );
}
