import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import jobAdvertSlice from "../features/jobAdvertSlice";

export const store = configureStore({
  reducer: {
    jobAdvert: jobAdvertSlice,
  },
});

export default store;

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispacth = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState>=useSelector;