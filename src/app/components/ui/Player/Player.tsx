import { IPlayer } from "@/lib/MongoDb/Models/Player";
import { countries } from "country-flags-svg";
import Image from "next/image";
import styles from "./player.module.scss";
import Link from "next/link";

export default async function Player({ player, avaSize }: { player: IPlayer | undefined; avaSize: number }) {
    if (!player) return <div>undefined player</div>;
    const country = countries.find((country) => country.iso2.toLocaleLowerCase() === player?.country?.toLocaleLowerCase())!;
    return (
        <Link href={`/players/${player._id}`} className={styles.playerWrap} style={{ width: avaSize }}>
            <div className={styles.avaBlock} style={{ widows: avaSize, height: avaSize }}>
                <Image src={player.avatar200 || player.avatar400 || "/img/player-image-default-small.svg"} width={avaSize} height={avaSize} alt={player.name} className={styles.ava} />
            </div>
            <Image src={country?.flag} width={27} height={17} alt={String(country?.name)} className={styles.flag} />
            <div className={styles.name}>{player.name}</div>
        </Link>
    );
}
