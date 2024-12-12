"use client";
import { useSelector } from "react-redux";
import styles from "./loader.module.scss";
import { RootState } from "@/redux/store";
import { Circles, RotatingLines } from "react-loader-spinner";

export default function Loader({ global = true }: { global?: boolean }) {
    const { isLoading } = useSelector((state: RootState) => state.main);

    if (isLoading || !global) {
        return (
            <div className={styles.loaderWrap}>
                <div className={styles.loaderBlock}>
                    <RotatingLines width="80" strokeColor="rgb(120, 118, 242)" ariaLabel="circles-loading" visible={true} />
                </div>
            </div>
        );
    }
}
