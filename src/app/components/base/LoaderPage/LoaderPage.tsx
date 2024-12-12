"use client";
import { useSelector } from "react-redux";
import styles from "./loader.module.scss";
import { RootState } from "@/redux/store";
import { Circles, RotatingLines } from "react-loader-spinner";
import LoaderBall from "../LoaderBall/LoaderBall";

export default function LoaderPage({ text }: { text?: string }) {
    return (
        <div className={styles.loaderWrap}>
            <div className={styles.loaderBlock}>
                {/* <RotatingLines width="80" strokeColor="rgb(120, 118, 242)" ariaLabel="circles-loading" visible={true} /> */}
                <LoaderBall text={text} ballSize={80} />
            </div>
        </div>
    );
}
