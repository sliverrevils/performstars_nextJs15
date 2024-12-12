"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./champsList.module.scss";
import { IPlayer } from "@/lib/MongoDb/Models/Player";
import { getPaginatedPlayersAction, getPlayersAllCountrys } from "@/lib/Actions/player";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingRedux } from "@/redux/slices/mainSlice";
import PlayerItem from "./ChampItem";
import { RootState } from "@/redux/store";
import { Circles, RotatingLines } from "react-loader-spinner";
import { letters } from "@/lib/vars";
import { useDebounce } from "use-debounce";
import { countries } from "country-flags-svg";

import Image from "next/image";
import { iCountryFull } from "../../../../../types/types";
import { findFullCountry } from "../../../../../utils/funcs";
import LoaderBall from "../../base/LoaderBall/LoaderBall";
import { IChamp } from "@/lib/MongoDb/Models/Champ";
import { getChampsAllCountrys, getPaginatedChampsAction } from "@/lib/Actions/champ";
import ChampItem from "./ChampItem";
//import { getCachedFlag } from "../../../../../utils/preloadFlags";

let curPage = 1;
let allPages = 0;
let loading = false;
let totalChamps = 0;
let firstInit = true;
export default function ChampsList() {
    const [champs, setChamps] = useState<IChamp[]>([]);

    const [limit, setLimit] = useState(100);
    const [isLoad, setIsLoad] = useState(true);
    const [filter, setFilter] = useState("");
    const [filterDebounce] = useDebounce(filter, 500);
    const [filterCountryBlock, setFilterCountryBlock] = useState("");
    const [countrys, setCountrys] = useState<(iCountryFull | undefined)[]>([]);

    const [filterPlayer, setFilterPlayer] = useState<"up" | "down" | "">("");
    const [filterShot, setFilterShot] = useState<"up" | "down" | "">("");
    const [filterCountry, setFilterCountry] = useState<"up" | "down" | "">("");
    const [filterDate, setFilterDate] = useState<"up" | "down" | "">("");

    const [isShowOnTop, setIsShowOnTop] = useState(false);

    //! FUNCS

    const dropTableFilters = () => {
        setFilterDate("");
        setFilterPlayer("");
        setFilterShot("");
        setFilterCountry("");
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY; // Текущая позиция прокрутки
        const windowHeight = window.innerHeight; // Высота видимой области
        const documentHeight = document.documentElement.scrollHeight; // Общая высота документа
        //console.log(documentHeight, windowHeight, scrollTop);

        setIsShowOnTop(() => scrollTop > 500);

        if (scrollTop + windowHeight >= documentHeight - 100) {
            // Если почти достигли конца страницы (100px отступ)
            if (!loading && curPage < allPages) {
                // dispatch(setLoadingRedux(true));
                console.log(`END OF PAGE ${curPage}`);
                curPage++;
                loading = true;
                setIsLoad(true);
                getPaginatedChampsAction({ page: curPage, limit, filter, filterFlag: filterCountryBlock })
                    .then((res) => {
                        setChamps((state) => [...state, ...res.champs]);
                        setIsLoad(false);
                    })
                    .finally(() => {
                        loading = false;
                    });
            }

            //
        }
    };

    //! EFFECTS

    useEffect(() => {
        if (!firstInit) return;

        curPage = 1;
        allPages = 0;
        loading = false;
        totalChamps = 0;
        setIsLoad(true);
        getPaginatedChampsAction({ page: curPage, limit, filter: filterDebounce, filterFlag: filterCountryBlock })
            .then((res) => {
                setChamps((state) => [...res.champs]);
                totalChamps = res.totalChamps;
                allPages = res.totalPages;
            })
            .finally(() => {
                setIsLoad(false);
            });
        document.addEventListener("scroll", handleScroll); // Добавляем обработчик прокрутки

        return () => {
            setChamps([]);
            document.removeEventListener("scroll", handleScroll); // Убираем обработчик при размонтировании компонента
        };
    }, [filterDebounce, filterCountryBlock]);

    useEffect(() => {
        console.log("GET COUNTRYS 🔄️");
        getChampsAllCountrys().then((countrysArr) => {
            const countrysFlags = countrysArr.map((countryStr) => countries.find((country) => country.iso2.toLocaleLowerCase() === countryStr?.toLocaleLowerCase()));
            //console.log(countrysFlags);
            setCountrys(countrysFlags);
        });
    }, []);

    //! MEMOS

    const flagsHTML = useMemo(() => {
        return (
            <div className={styles.flagsBlock}>
                {countrys.map((country) => {
                    if (!country) return false;

                    // const src = getCachedFlag(country.iso2);
                    // console.log("SRC", src);
                    // if (!src) return false;

                    return (
                        <div className={`${styles.flagWrap} ${filterCountryBlock === country!.iso2 ? styles.flagWrapActive : ""}`} key={country!.name + Math.random().toString()}>
                            <div className={styles.flagItem} onClick={() => setFilterCountryBlock((state) => (state !== country!.iso2 ? country!.iso2 || "" : ""))}>
                                {country ? <Image src={country.flag} alt={String(country.name)} width={27} height={17} priority /> : <span>unknown</span>}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }, [countrys, filterCountryBlock]);

    const sortedEventsHTML = useMemo(() => {
        return champs
            .sort((a, b) => {
                const aFix = a.name || a.name2 || "";
                const bFix = b.name || b.name2 || "";
                if (filterPlayer == "up") return aFix.localeCompare(bFix);
                if (filterPlayer == "down") return bFix.localeCompare(aFix);
                return 1;
            })
            .sort((a, b) => {
                const aFix = new Date(a.d || 0).getTime();
                const bFix = new Date(b.d || 0).getTime();
                if (filterDate == "up") return bFix - aFix;
                if (filterDate == "down") return aFix - bFix;
                return 1;
            })
            .sort((a, b) => {
                const aFix = findFullCountry(a.country || "")?.name || "unknown";
                const bFix = findFullCountry(b.country || "")?.name || "unknown";
                if (filterCountry == "up") return aFix.localeCompare(bFix);
                if (filterCountry == "down") return bFix.localeCompare(aFix);
                return 1;
            })
            .map((champ, idx) => <ChampItem key={champ._id} champ={champ} />);
    }, [champs, filterPlayer, filterPlayer, filterShot, filterCountry]);

    const notFoundChampsHtml = useMemo(() => {
        if (!champs.length && !isLoad) {
            return (
                <div className={styles.notFoundBlock}>
                    <span className={styles.messageText}>No champs found with the current filters.</span>
                    <div
                        className={styles.dropFilterBtn}
                        onClick={() => {
                            setFilter("");
                            setFilterCountryBlock("");
                        }}
                    >
                        Drop selected filters
                    </div>
                </div>
            );
        }
    }, [champs, isLoad]);

    const onTopBtnHTML = useMemo(() => {
        if (isShowOnTop) {
            return (
                <div
                    className={styles.onTopBtn}
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}
                >
                    <span>On top </span>
                    <div className={styles.ico}>🔺</div>
                </div>
            );
        }
    }, [isShowOnTop]);

    return (
        <div className={styles.playerListWrap}>
            {process.env.NODE_ENV === "development" && (
                <div style={{ position: "fixed", top: 0, right: 0 }}>
                    <div>all:{totalChamps}</div>
                    <div>now:{champs.length}</div>
                    <div>flag:{filterCountryBlock}</div>
                </div>
            )}

            <div className={styles.filterBlock} onMouseEnter={(event) => event.currentTarget.querySelector("input")?.focus()}>
                <div className={styles.ico}>🔍</div>
                <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)} spellCheck={false} placeholder="Search for a match..." />
            </div>
            {/* <div className={styles.lettersBlock}>
                {letters.map((letter) => (
                    <div key={letter} className={`${styles.letter} ${filter.toLowerCase() === letter.toLowerCase() ? styles.letterActive : ""}`} onClick={() => setFilter(letter)}>
                        <span>{letter}</span>
                    </div>
                ))}
            </div> */}

            {flagsHTML}

            <div className={styles.playersListBlock}>
                <div className={styles.headers}>
                    <div className={styles.headerName}>
                        <span onClick={() => setFilterDate("")} style={{ cursor: "pointer" }}>
                            Name
                        </span>
                        <div className={styles.filter}>
                            <div
                                className={`${styles.filterItem} ${filterPlayer === "up" ? styles.filterItem_selected : ""}`}
                                onClick={() => {
                                    dropTableFilters(), setFilterDate((state) => (state !== "up" ? "up" : ""));
                                }}
                            >
                                🔺
                            </div>
                            <div
                                className={`${styles.filterItem} ${filterPlayer === "down" ? styles.filterItem_selected : ""}`}
                                onClick={() => {
                                    dropTableFilters(), setFilterDate("down");
                                }}
                            >
                                🔻
                            </div>
                        </div>
                    </div>

                    <div className={styles.headerDate}>
                        <span onClick={() => setFilterPlayer("")} style={{ cursor: "pointer" }}>
                            Date
                        </span>
                        <div className={styles.filter}>
                            <div
                                className={`${styles.filterItem} ${filterPlayer === "up" ? styles.filterItem_selected : ""}`}
                                onClick={() => {
                                    dropTableFilters(), setFilterPlayer((state) => (state !== "up" ? "up" : ""));
                                }}
                            >
                                🔺
                            </div>
                            <div
                                className={`${styles.filterItem} ${filterPlayer === "down" ? styles.filterItem_selected : ""}`}
                                onClick={() => {
                                    dropTableFilters(), setFilterPlayer("down");
                                }}
                            >
                                🔻
                            </div>
                        </div>
                    </div>

                    <div className={styles.headerShots}>
                        <span onClick={() => setFilterShot("")} style={{ cursor: "pointer" }}>
                            Game
                        </span>
                        <div className={styles.filter}>
                            <div
                                className={`${styles.filterItem} ${filterShot === "up" ? styles.filterItem_selected : ""}`}
                                onClick={() => {
                                    dropTableFilters(), setFilterShot("up");
                                }}
                            >
                                🔺
                            </div>
                            <div
                                className={`${styles.filterItem} ${filterShot === "down" ? styles.filterItem_selected : ""}`}
                                onClick={() => {
                                    dropTableFilters(), setFilterShot("down");
                                }}
                            >
                                🔻
                            </div>
                        </div>
                    </div>
                    <div className={styles.headerCountry}>
                        <span onClick={() => setFilterCountry("")} style={{ cursor: "pointer" }}>
                            Country
                        </span>
                        {filterCountryBlock === "" && (
                            <div className={styles.filter}>
                                <div
                                    className={`${styles.filterItem} ${filterCountry === "up" ? styles.filterItem_selected : ""}`}
                                    onClick={() => {
                                        dropTableFilters(), setFilterCountry("up");
                                    }}
                                >
                                    🔺
                                </div>
                                <div
                                    className={`${styles.filterItem} ${filterCountry === "down" ? styles.filterItem_selected : ""}`}
                                    onClick={() => {
                                        dropTableFilters(), setFilterCountry("down");
                                    }}
                                >
                                    🔻
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {sortedEventsHTML}
                {notFoundChampsHtml}
            </div>
            {isLoad && (
                <div className={styles.loadingBlock}>
                    <LoaderBall text="Loading players..." />
                </div>
            )}
            {onTopBtnHTML}
        </div>
    );
}
