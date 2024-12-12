"use client";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import Container from "../../common/Container/Container";
import Header from "../../base/Header/Header";
import Footer from "../../base/Footer/Footer";
import styles from "./home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import HomeSlider from "../../common/HomeSlider/HomeSlider";
import LatestVideosList from "../../lists/LatestVideosList/LatestVideosList";

export default function HomePage({ children }: { children: ReactNode }) {
    const isHome = usePathname() === "/";

    if (!isHome)
        return (
            <>
                <Header />
                <main>
                    <Container>{children}</Container>
                </main>
                <Footer />
            </>
        );

    return (
        <>
            <Header />
            <main className={styles.homeMain}>
                <HomeSlider />
                {children}
            </main>
            <Footer />
        </>
    );
}
