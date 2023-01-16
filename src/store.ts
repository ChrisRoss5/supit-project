import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { User } from "@/types";

interface MainState {
  isContactOpen: boolean,
  user: User,
  isSignedIn: boolean,
}

const initialState: MainState = {
  isContactOpen: false,
  user: {
    token: localStorage.getItem("token") || "",
    username: localStorage.getItem("username") || "",
  } as User,
  isSignedIn: !!localStorage.getItem("token"),
}

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleContact: (state, action: PayloadAction<boolean>) => {
      state.isContactOpen = action.payload;
    },
    signIn: (state, action: PayloadAction<User>) => {
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("token", action.payload.token);
      state.user = action.payload;
      state.isSignedIn = true;
    },
    signOut: (state) => {
      localStorage.clear();
      state.user = { token: "", username: "" };
      state.isSignedIn = false;
    },
  },
});

const store = configureStore({ reducer: mainSlice.reducer });

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const { toggleContact, signIn, signOut } = mainSlice.actions;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
