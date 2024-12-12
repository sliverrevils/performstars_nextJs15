import { ReactNode } from "react";
import styles from "./infoBlock.module.scss";

export default function InfoBlock({ children, title }: { children: ReactNode; title: string }) {
    return (
        <div className={styles.infoWrap}>
            <div className={styles.infoTitle}>{title}</div>
            <div className={styles.infoContent}>{children}</div>
        </div>
    );
}
