import Link from "next/link";
import HistoryPath from "../components/base/History/History";
import InfoBlock from "../components/ui/InfoBlock/InfoBlock";
import styles from "./about.module.scss";

export default function About() {
    return (
        <>
            <HistoryPath lastPath="About the portal" padding={16} />
            <div className={styles.aboutWrap}>
                <div className={styles.aboutBlock}>
                    <InfoBlock title="Our history">
                        <div>
                            Our project's story is the history of AI computer vision algorithms' development based on cloud computing systems. We recognize a video stream in real-time by using a huge amount of calculations. The hardware's computing power, available for use by small development teams, has only recently made it possible to organize such calculations. Manufacturers made the greatest
                            contribution to the industry of microprocessors. We should also note the progress in the development of algorithms for so-called "neural networks". It opened up the possibility of using them directly for video recognition and required even more powerful computing stations. Their appearance was also not long in coming. Ultimately, a significant contribution to the
                            emergence of our project was made by the improvement of data transmission and storage technologies, video recording, and online services that provide free hosting for videos of any volume and allow you to organize video broadcasts for free. Today, we see more and more billiard rooms and individual players broadcast their events. More and more cameras appear in the
                            world, more and more aspects of our lives fall into their lenses.
                        </div>
                        <div>
                            At some point, we were able to combine all these technologies for automatic processing and analysis of billiard videos. Billiards suits this task very well, as it has a lot of mathematics. The first difficulty we encountered was the lack of a single shooting angle in all the variety of video recordings. On each record, all the angles are different from each other. The
                            recording often consists of several views: front view, side view, diagonal view. It is entirely invisible to a person, but any new view is a huge problem if we talk about computer vision. It is not enough to create a system that can work with only one calibrated view. We have developed a mathematical model of a billiard room for working with different views. We solved
                            this problem by teaching the computer to recognize the billiard table and its orientation in three-dimensional space. Then, in the three-dimensional space, we find a two-dimensional playing surface to calculate the balls spatio-temporal coordinates. The result is a four-dimensional matrix filled with numbers in a specific sequence.
                        </div>
                        <video autoPlay loop muted>
                            <source src={"/video/ab_Trim.mp4"} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                        </video>
                        <div>
                            Another big problem was the presence of noise in the video. If we were getting video from just one single views - the top-down view - there would be no noise. Since we often work with another views, something frequently obscures the view on them. For example, the player moves in front of the camera. It creates a lot of trouble during the shot when the balls move on the
                            table, and the algorithm calculates their tracks based on the visual series. If we mean natural human intelligence, then it is a simple, intuitive task - connecting the beginning and end of the ball's trajectory. The computer model completely broke down when the reference points disappeared from view. Fortunately, we managed to connect them. We had to complicate the
                            mathematical model to predict the movement of the balls in the temporary absence of visibility.
                        </div>
                        <video autoPlay loop muted>
                            <source src={"/video/about4.mp4"} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                        </video>
                    </InfoBlock>

                    <InfoBlock title="Technical skill criteria">
                        <div>
                            When we have taught computer vision algorithms to recognize the billiard videos, it is time to think about the <Link href={"/criteria"}>criteria that describe players skill levels</Link>. What and how should be analyzed? We have consulted a lot with experienced players on this topic. Each shot can be divided into 2 parts: ball pocketing and position play. We can
                            estimate shot complexity by several criteria. For example, the distance between the cue ball and the object ball. The shots outcome statistics are equally important. Exact formula is not disclosed, but we are constantly working to improve it.
                        </div>
                        <video autoPlay loop muted>
                            <source src={"/video/about2_Trim.mp4"} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                        </video>
                        <div>
                            As for the position play, there are fewer objective technical skill criteria. An experienced player does not always strive to get a strictly direct shot, which would be reasonable for computer logic. Opposite, players intentionally leave the desired cutting angles, building a run strategy. The system has not yet learned to predict exactly what cutting angle the player
                            should set. It is clear that the greater the cue ball travel distance, the more complexity this shot is. Over time, when we get a large <Link href={"/statistic"}>statistical</Link> sample of the best players' experience, we will teach the mathematical model to predict the optimal position areas in similar situations. Then we can even more accurately assess the quality
                            of the position play.
                        </div>
                        <video autoPlay loop muted>
                            <source src={"/video/about3_Trim.mp4"} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                        </video>
                        <div>
                            You can find out exactly what criteria the system currently evaluates directly on <Link href={"/criteria"}>this page </Link> . As improvements occur, new, more subtle criteria will appear. If we talk about athletes who have accumulated a significant amount of statistics for the current season, we calculate the composite index of main player's performance indicators.
                            Such athletes are automatically included in the overall world rating of players according to our version. As new video content is recognized and new data becomes available, player positions are updated.
                        </div>
                    </InfoBlock>

                    <InfoBlock title="Data sources">
                        <div>
                            The system continuously scans the Internet for new videos. The collected statistics supplement the profiles of existing players or create new profiles. We collect only open and publicly available video for analyzing. By publishing a video in open access, you allow us to process it and publish the result. See details at our
                            <Link href={"/privacy-policy"}>privacy policy page</Link>.
                        </div>
                        <div>
                            Players can use our offer to analyze the video recordings of their own practice sessions. This service is provided under restricted access conditions and on a fee paid basis. In member area players can access extended analysis functionality and their progress tracking. There is also a possibility of external access given to a coach or player's partner in order to enable
                            cooperative work. Practice sessions analytical data remain private and make no impact on overall rating. With the use of this any player can efficiently track the level and dynamics of their own skill For the time being this section is under development.
                        </div>
                    </InfoBlock>
                </div>
            </div>
        </>
    );
}
