"use client";

import Image from "next/image";
import Container from "../../common/Container/Container";
import styles from "./header.module.scss";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PATHS } from "@/lib/paths";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";

export default function Header() {
    const [isBurger, setIsBurger] = useState(false);
    const pathname = usePathname();
    const createMenuItem = (pathName: string) => {
        const isCurrent = pathname.includes(pathName.toLowerCase());
        return (
            <li key={pathName + "_pathName"} className={`${styles.navItem}  ${isCurrent ? styles.navItemCurrent : ""}`} onClick={() => setIsBurger(false)}>
                <Link href={`/${pathName.toLowerCase()}`}>{pathName}</Link>
            </li>
        );
    };
    return (
        <header className={styles.headerMainWrap}>
            <Container>
                <div className={`${styles.headerBlock} ${isBurger ? styles.burgerOpen : ""}`}>
                    <div className={styles.userBlock}>🤖</div>
                    <div className={styles.logo}>
                        <Link href={"/"}>
                            <Image src={"/img/logo.svg"} width={200} height={50} alt="PerformStars" />
                        </Link>
                    </div>
                    <div className={styles.burgerBtn} onClick={() => setIsBurger((state) => !state)}>
                        <span>{isBurger ? <XCircleIcon width={30} color="white" /> : <Bars3Icon width={30} color="white" />}</span>
                    </div>

                    <nav className={`${styles.navBlock} `}>
                        <ul>{PATHS.map(createMenuItem)}</ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
