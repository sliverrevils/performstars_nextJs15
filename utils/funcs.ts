import { countries } from "country-flags-svg";
import { iCountryFull } from "../types/types";
import { IPlayer } from "@/lib/MongoDb/Models/Player";

export const findFullCountry = (shotCountry: string): iCountryFull | undefined => countries.find((country) => country.iso2.toLocaleLowerCase() === shotCountry.toLocaleLowerCase());

export const fixDBRes = <T>(dbRes) => JSON.parse(JSON.stringify(dbRes)) as T;

export const findPlayerInPlayers = ({ players, playerId }: { players: IPlayer[]; playerId: string }) => players.find((player) => player._id === playerId);
