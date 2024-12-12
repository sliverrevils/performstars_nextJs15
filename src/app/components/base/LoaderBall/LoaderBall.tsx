import styles from "./loaderBall.module.scss";

export default function LoaderBall({ text, ballSize = 40 }: { text?: string; ballSize?: number }) {
    return (
        <div className={styles.loaderBallWrap}>
            {text && <div className={styles.loaderText}>{text}</div>}
            <svg width={ballSize} height={ballSize} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.spinner}>
                <circle cx="100" cy="100" r="95" stroke="#7876f2" strokeWidth="10" fill="#7876f2" />
                <circle cx="100" cy="100" r="40" fill="white" />
                <text x="100" y="115" fontFamily="Arial" fontWeight={600} fontSize="50" textAnchor="middle" fill="#7876f2">
                    8
                </text>
            </svg>
        </div>
    );
}
