import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../createAppSlice";

interface IInitialState {
    user: string;
    isLoading: boolean;
}

const initialState: IInitialState = {
    user: "",
    isLoading: false,
};

export const mainSlice = createAppSlice({
    name: "main",
    initialState,
    reducers: (create) => ({
        setLoadingRedux: create.reducer((state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }),
    }),
    selectors: {
        isLoadingSelector: (state) => state.isLoading,
    },
});

export const { setLoadingRedux } = mainSlice.actions;

export const { isLoadingSelector } = mainSlice.selectors;
