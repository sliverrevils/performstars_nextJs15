import { IPlayer } from "@/lib/MongoDb/Models/Player";
import { createAppSlice } from "../createAppSlice";
import { getAllPlayersAction } from "@/lib/Actions/player";

interface IInitialPlayerState {
    players: IPlayer[];
    status: "idle" | "loading" | "failed";
}
const initialState: IInitialPlayerState = {
    players: [],
    status: "idle",
};

export const playerSlice = createAppSlice({
    name: "players",
    initialState,
    reducers: (create) => ({
        getAllPlayersRedux: create.asyncThunk(
            async () => {
                const players = await getAllPlayersAction();

                return players;
            },
            {
                pending: (state) => {
                    state.status = "loading";
                },
                fulfilled: (state, action) => {
                    state.status = "idle";
                },
                rejected: (state) => {
                    state.status = "failed";
                },
            }
        ),
    }),
});

export const { getAllPlayersRedux } = playerSlice.actions;
