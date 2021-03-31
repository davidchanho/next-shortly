import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk, RootState } from "./store";

export interface IUrl {
  id?: string;
  new: string;
  old: string;
}

interface UrlState {
  urls: IUrl[];
}

const initialState = { urls: [] } as UrlState;

const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    set(state, action: PayloadAction<IUrl>) {
      state.urls.push(action.payload);
    },
  },
});

export const { set } = urlSlice.actions;

export default urlSlice.reducer;

export const urlsSelector = (state: RootState) => state.urls;

export const shortenUrl = (url: string): AppThunk => async (dispatch) => {
  const id = nanoid();
  const newUrl = `https://srtly.com/${id}`;
  const saveUrl = { new: newUrl, old: url };
  axios.post("/api/urls", saveUrl);
  dispatch(set(saveUrl));
};
