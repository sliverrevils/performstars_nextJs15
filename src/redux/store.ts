import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./slices/mainSlice";
import { playerSlice } from "./slices/playersSlice";

const rootReducer = combineSlices(mainSlice, playerSlice);

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV === "development",
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
