"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";
import { PATHS } from "@/lib/paths";

export default function Navbar() {
    const pathname = usePathname();
    const createMenuItem = (pathName: string) => {
        const isCurrent = pathname.includes(pathName.toLowerCase());
        return (
            <li key={pathName + "_pathName"} className={`${styles.navItem}  ${isCurrent ? styles.navItemCurrent : ""}`}>
                <Link href={`/${pathName.toLowerCase()}`}>{pathName}</Link>
            </li>
        );
    };
    return (
        <nav className={styles.navbarWrap}>
            <ul>{PATHS.map(createMenuItem)}</ul>
        </nav>
    );
}
