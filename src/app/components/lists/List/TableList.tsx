import { ReactNode } from "react";
import styles from "./table.module.scss";

export default function TableList({ headers, children }: { headers: string[]; children: ReactNode }) {
    return (
        <table className={styles.mainTable}>
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header + Math.random()}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
}
