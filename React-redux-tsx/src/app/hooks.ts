import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootStates, AppDispatch } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootStates> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>() 