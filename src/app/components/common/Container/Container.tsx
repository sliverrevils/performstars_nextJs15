"use client";
import styles from "./container.module.scss";

export default function Container({ children }: { children: React.ReactNode }) {
    return <div className={styles.mainContainer}>{children}</div>;
}
