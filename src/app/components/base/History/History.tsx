"use client";

import { usePathname } from "next/navigation";
import styles from "./history.module.scss";
import Link from "next/link";
import { ArrowUturnLeftIcon, ChevronDoubleLeftIcon, HomeIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function HistoryPath({ lastPath, playerName, padding }: { lastPath?: string; playerName?: string; padding?: number }) {
    const pathname = usePathname(); // Получаем текущий путь
    const segments = pathname.split("/").filter(Boolean); // Разбиваем путь на сегменты
    console.log("PATH", pathname, segments);

    const goBack = () => {
        if (typeof window !== "undefined" && window.history.length > 1) {
            window.history.back();
        } else {
            // Если история пуста, можно перенаправить на главную страницу или другую
            window.location.href = "/";
        }
    };
    // Генерация ссылок
    const breadcrumbs = segments.map((segment, index) => {
        const path = "/" + segments.slice(0, index + 1).join("/"); // Генерация пути для каждого сегмента
        const isLast = index === segments.length - 1; // Проверка, последний ли это элемент

        return (
            <span key={path} className={styles.breadcrumbItem}>
                {!isLast ? (
                    <Link href={path} className={styles.breadcrumbLink}>
                        {decodeURIComponent(segment).toUpperCase()} {/* Преобразование URL-энкодинга */}
                    </Link>
                ) : (
                    <span className={styles.breadcrumbCurrent}>{decodeURIComponent(playerName || lastPath?.toLocaleUpperCase() || segment.toUpperCase())}</span>
                )}
                {!isLast && (
                    <span className={styles.breadcrumbSeparator}>
                        <ChevronRightIcon width={20} />
                    </span>
                )}
            </span>
        );
    });

    return (
        <div className={styles.historyWrap} style={padding ? { padding } : {}}>
            <div className={styles.backBtn} onClick={goBack}>
                <ArrowUturnLeftIcon width={20} />
                {/* <span>back</span> */}
            </div>
            <nav className={styles.breadcrumbs}>
                <Link href="/" className={styles.breadcrumbLink}>
                    <HomeIcon width={20} />
                    <span> HOME </span>
                </Link>
                {segments.length > 0 && (
                    <span className={styles.breadcrumbSeparator}>
                        <ChevronRightIcon width={20} />
                    </span>
                )}
                {breadcrumbs}
            </nav>
        </div>
    );
}
