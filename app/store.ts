import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import urlReducer from "./urlSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    urls: urlReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
