"use client";
import { setLoadingRedux } from "@/redux/slices/mainSlice";
import { getAllPlayersRedux } from "@/redux/slices/playersSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Test() {
    const { isLoading } = useSelector((state: RootState) => state.main);
    const { status } = useSelector((state: RootState) => state.players);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>TEST</h1>
            <hr />
            <button onClick={() => dispatch(setLoadingRedux(true))}>CLICK</button>
            <div>{String(isLoading)}</div>
            <hr />
            <button onClick={() => getAllPlayersRedux()}>CLICK</button>
            {status}
        </div>
    );
}
