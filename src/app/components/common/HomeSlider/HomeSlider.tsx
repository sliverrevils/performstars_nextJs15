"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container/Container";
import styles from "./homeSlider.module.scss";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    function showNumberOfCurrentSlide(swiper) {
        if (swiper.activeIndex > swiper.slides.length - 2) {
            setCurrentSlide(1);
        } else if (swiper.activeIndex < 1) {
            setCurrentSlide(swiper.slides.length - 2);
        } else {
            setCurrentSlide(swiper.activeIndex);
        }
    }

    const slides = [
        <>
            <div className={styles.slideWrap}>
                <Container>
                    <div className={styles.blocksWrap}>
                        <div className={styles.leftBlock}>
                            <div className={styles.top}>
                                {/* <div className="new">New</div> */}
                                <div className="text">Welcome to new analytics service</div>
                            </div>
                            <div className={styles.title}>AI-driven computer vision algorithms used for billiard stats collection</div>
                            <div className={styles.info}>We provide every pool player a personal dashboard evaluating their level and skill dynamics</div>
                            <Link href="/about">
                                <div className={styles.moreBtn}>
                                    <span>More</span>
                                    <ArrowLongRightIcon width={24} />
                                </div>
                            </Link>
                        </div>
                        <div className={styles.rightBlock}>
                            <div className="picture">
                                <img src="/img/slider/swiper-picture1.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* <img className="slide" src="/img/slider/swiper-slide1.jpg" alt="img"></img> */}
        </>,
        <>
            <div className={styles.slideWrap}>
                <Container>
                    <div className={styles.blocksWrap}>
                        <div className={styles.leftBlock}>
                            <div className={styles.top}>
                                <div className="text">Welcome to new analytics service</div>
                            </div>
                            <div className={styles.title}>Automated online analytics of practice sessions</div>
                            <div className={styles.info}>Track the growth and dynamics of your training, evaluate the result, and receive personalized recommendations to improve your level of play </div>
                            {/* <a href="/services/#onlineAnalytics">
                            <div className="btn btn-more">
                                More&nbsp;&nbsp;
                                <img src="/assets/img/icons/arrow_right.svg" />
                            </div>
                        </a> */}
                        </div>
                        <div className={styles.rightBlock}>
                            <div className="picture">
                                <img src="/img/slider/swiper-picture2.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* <img className="slide" src="/img/slider/swiper-slide2.jpg" alt="img" /> */}
        </>,
        <>
            <div className={styles.slideWrap}>
                <Container>
                    <div className={styles.blocksWrap}>
                        <div className={styles.leftBlock}>
                            <div className={styles.top}>
                                <div className="text">Welcome to new analytics service</div>
                            </div>
                            <div className={styles.title}>Automatic online evaluation of billiard playing skills</div>
                            <div className={styles.info}>Receive a personal certificate indicating your current level of play. Compare yourself against well-known players</div>
                            {/* <a href="/services/#onlineEvaluation">
                            <div className="btn btn-more">
                                More&nbsp;&nbsp;
                                <img src="/assets/img/icons/arrow_right.svg" />
                            </div>
                        </a> */}
                        </div>
                        <div className={styles.rightBlock}>
                            <div className="picture">
                                <img src="/img/slider/swiper-picture3.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* <img className="slide" src="/img/slider/swiper-slide3.jpg" alt="img" /> */}
        </>,
    ];
    return (
        <div className={styles.swiperWrap}>
            <div className={styles.swiperBlock}>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    onSlideChange={showNumberOfCurrentSlide}
                    className="swiper-wrapper"
                    direction="horizontal"
                    speed={700}
                    effect="slide"
                    loop={true}
                    //slideActiveClassName="swiper-slide-active"
                    setWrapperSize={false}
                    scrollbar={{ hide: true }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false, stopOnLastSlide: false }}
                >
                    {slides.map((slide, index) => {
                        return <SwiperSlide key={index}>{slide}</SwiperSlide>;
                    })}
                </Swiper>
            </div>
        </div>
    );
}
