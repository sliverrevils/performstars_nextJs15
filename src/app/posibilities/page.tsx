import Image from "next/image";
import HistoryPath from "../components/base/History/History";
import InfoBlock from "../components/ui/InfoBlock/InfoBlock";
import styles from "./poss.module.scss";
import Link from "next/link";

export default function Possibilitys() {
    return (
        <>
            <HistoryPath padding={16} />
            <div className={styles.possibilitysWrap}>
                <div className={styles.possibilitysBlock}>
                    <InfoBlock title="Ball trajectory automated modeling system">
                        <div>
                            The set of basic algorithms developed by us recognize the trajectory of movement on any static billiard video with an efficiency of up to 95%. The novelty lies in the fact that our system works equally effectively in a very wide range of operating conditions, from a conventional smartphone to professional cameras. Unlike existing algorithms that impose very strict
                            initial requirements on the quality of the incoming video and work effectively only for strictly verified, calibrated conditions.
                        </div>

                        <video autoPlay loop muted>
                            <source src={"/video/3XD2PYshAystiTp5e_Trim.mp4"} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                        </video>
                    </InfoBlock>
                    <InfoBlock title="Players research">
                        <div>Quality and up-to-date database of real players, continuously updated and moderated. Over 750 players present at the moment of service launch. The performance criteria is real for every player listed. The requirement for new player to be added is presence of video recordings featuring such a player, as of 2019 and later.</div>
                        <div>
                            In order to check the results, one could just enter a part of the player's name at the <Link href={"/players"}> search page</Link>. Sometimes alphabetical order listing could be more convenient.
                        </div>
                        <img src="/img/search.png" alt="Player search" />
                    </InfoBlock>
                    <InfoBlock title="Players performance view">
                        <div>
                            Players pages offer free access to basic technical and individual performance data which describe the level of a certain player and his personal playing style both from qualitative and quantitative perspective. This data calculation is based on statistics gathered by artificial intelligence during video recordings processing. More information on players’ data is at the
                            <Link href={"/criteria"}>performance data page</Link>. More information on statistics is at the <Link href={"/statistics"}>shot statistics page</Link>.
                        </div>
                        <img src="/img/params.png" alt="params" />
                        <img src="/img/params2.png" alt="params2" />
                    </InfoBlock>
                    <InfoBlock title="Players development tracking">
                        <div>Our server infrastructure allows for most efficient and unified storage of players performance data in Big Data format. This enables analyzing any change dynamics over a certain period.</div>
                        <img src="/img/dynamic.png" alt="dynamic" />
                    </InfoBlock>
                    <InfoBlock title="Identifying growth areas for players">
                        <div>Based on shots statistics the service automatically points to the fundamentals which are not ideal. This allows to focus the practice sessions on proper areas and increase overall level of play more efficiently.</div>
                        {/* <img src="/img/dynamic.png" alt="params" /> */}
                    </InfoBlock>
                    <InfoBlock title="Matches analysis">
                        <div>Based on shots statistics the service automatically points to the fundamentals which are not ideal. This allows to focus the practice sessions on proper areas and increase overall level of play more efficiently.</div>
                        <img src="/img/compare.png" alt="compare" />
                        <img src="/img/match.png" alt="match" />
                        <img src="/img/scheme.png" alt="scheme" />
                    </InfoBlock>
                    <InfoBlock title="Practice sessions analysis">
                        <div>
                            Players can use our service to analyze the video recordings of their own practice sessions. This service is provided under restricted access conditions and on a fee paid basis. In member area players can access extended analysis functionality and their progress tracking. There is also a possibility of external access given to a coach or player's partner in order to
                            enable cooperative work.
                        </div>
                        <div>Practice sessions analytical data remain private and make no impact on overall rating. With the use of this any player can efficiently track the level and dynamics of their own skill</div>
                        <img src="/img/list.png" alt="list" />
                        <img src="/img/one.jpg" alt="one" />
                    </InfoBlock>
                    <InfoBlock title="Real time shot visualization">
                        <div>We impose on the video a graphic layer with a 3D effect with lines for visualizing the trajectories of the balls. For the top view, the system works in real time, which allows it to be used for sports broadcasts.</div>
                    </InfoBlock>
                </div>
            </div>
        </>
    );
}
