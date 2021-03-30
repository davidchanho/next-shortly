import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./store";

interface IUrl {
  id: string;
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
    get(state, action: PayloadAction<IUrl>) {},
  },
});

export const { set, get } = urlSlice.actions;
export default urlSlice.reducer;
export const urlsSelector = (state: RootState) => state.urls;
export const shortenUrl = (url: string): AppThunk => async (dispatch) => {
  const id = nanoid();
  const newUrl = `https://srtly.com/${id}`;
  const saveUrl = { id, new: newUrl, old: url };
  dispatch(set(saveUrl));
};
