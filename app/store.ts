import { Action, applyMiddleware, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import urlReducer from "./urlSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  urls: urlReducer,
  users: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const middlewares = [thunk, logger];

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
