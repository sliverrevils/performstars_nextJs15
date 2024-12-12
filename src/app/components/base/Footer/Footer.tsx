"use client";

import Link from "next/link";
import Container from "../../common/Container/Container";
import styles from "./footer.module.scss";
export default function Footer() {
    return (
        <footer className={styles.footerMainWrap}>
            <Container>
                <div className={styles.contentWrap}>
                    <div className={styles.contentRow}>
                        <div className={styles.logoBlock}>
                            <img src="/img/footer-logo.svg" alt="logo" />
                            <div className={styles.logoText}>We provide every billiard player a personal dashboard evaluating their level and skill dynamics</div>

                            <ul>
                                <li>
                                    {/* native <Link> for external as */}
                                    <Link href="https://www.youtube.com/channel/UCoagVPt3t16t20vSzdkMsag" className="social-list-item" target="_blank">
                                        <img src="/icons/youtube_footer.svg" alt="social " />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.facebook.com/PerformStars" className="social-list-item" target="_blank">
                                        <img src="/icons/facebook.svg" alt="social facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/performstarscom/" className="social-list-item" target="_blank">
                                        <img src="/icons/instagram.svg" alt="social facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.tiktok.com/@performstars" className="social-list-item" target="_blank">
                                        <img src="/icons/tiktok.svg" alt="social " />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.aedin.com/groups/14190912/" className="social-list-item" target="_blank">
                                        <img src="/icons/linked.svg" alt="social " style={{ width: "36px" }} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://t.me/performstars" className="social-list-item" target="_blank">
                                        <img src="/icons/telegram.svg" alt="social " style={{ width: "34px" }} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:info@performstars.com" className="social-list-item" target="_blank">
                                        <img src="/icons/email.svg" alt="social " />
                                    </Link>
                                </li>
                                {/*<li className="list-inline-item">
                            //     <Link href="https://api.whatsapp.com/send/?phone=16467605" className="social-list-item" target="_blank">
                            //         <img src="/icons/whta.png" width={44} height={44} alt="social " />
                            //     </Link>
                            // </li>*/}
                            </ul>
                        </div>

                        <div className={styles.linksWrap}>
                            <div className={styles.linksBlock}>
                                <div className={styles.blockTitle}>Service</div>

                                <ul>
                                    <li className="">
                                        <Link href="/about-us">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/possibilities">Possibilities</Link>
                                    </li>
                                    <li>
                                        <Link href="/cooperation-program">Cooperation</Link>
                                    </li>
                                    <li>
                                        <Link href="/drills-pilot-2023">Drills pilot 2023</Link>
                                    </li>
                                    {/* <li className="">
                                    <Link href="/services">
                                        
                                            Services
                                        </Link>
                                    </a>
                                </li> */}
                                </ul>
                            </div>

                            <div className={styles.linksBlock}>
                                <div className={styles.blockTitle}>Theory description</div>

                                <ul>
                                    <li>
                                        <Link href="/criteria">Criteria</Link>
                                    </li>
                                    <li>
                                        <Link href="/statistics">Statistics</Link>
                                    </li>
                                    <li>
                                        <Link href="/theory">Theory</Link>
                                    </li>
                                    <li>
                                        <Link href="/questions">Questions</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.linksBlock}>
                                <div className={styles.blockTitle}>Documentation</div>

                                <ul>
                                    <li>
                                        <Link href="/terms">Terms</Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                    </li>

                                    <li>
                                        <Link href="/requirements">Video requirements</Link>
                                    </li>

                                    <li>
                                        <Link href="/how-to-record-and-submit-a-video">How to record and submit a video</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.copyrightsBlock}>
                        <span>© 2020 - 2023 Performstars.com</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
