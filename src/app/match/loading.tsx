"use client";

import { setLoadingRedux } from "@/redux/slices/mainSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "../components/base/Loader/Loader";
import LoaderPage from "../components/base/LoaderPage/LoaderPage";

export default function Loading() {
    return <LoaderPage text="Loading match" />;
}
