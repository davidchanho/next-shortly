import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk, RootState } from "./store";

export interface IUrl {
  _id?: string;
  new: string;
  old: string;
}

interface UrlState {
  urls: IUrl[];
  loading: boolean;
  error: string;
}

const initialState: UrlState = {
  urls: [],
  loading: false,
  error: "",
};

const urlSlice = createSlice({
  name: "url",
  initialState,
  reducers: {
    set(state, action: PayloadAction<IUrl>) {
      state.urls.push(action.payload);
      state.loading = false;
    },
    load(state, action: PayloadAction<IUrl[]>) {
      state.urls = action.payload;
      state.loading = false;
    },
    loading(state) {
      state.loading = true;
      state.error = "";
    },
    error(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { set, load, loading, error } = urlSlice.actions;

export default urlSlice.reducer;

export const urlsSelector = (state: RootState) => state.urls;

export const shortenUrl = (url: string): AppThunk => async (dispatch) => {
  dispatch(loading());
  try {
    const id = nanoid(6);
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => console.log(res.data.result["short_link"]));
    const newUrl = `https://rel.ink/${id}`;
    const saveUrl = { id, new: newUrl, old: url };
    axios.post("/api/urls", saveUrl);
    dispatch(set(saveUrl));
  } catch (err) {
    dispatch(error(err.message));
  }
};

export const loadUrl = (): AppThunk => async (dispatch) => {
  dispatch(loading());
  try {
    const {
      data: { urls },
    } = await axios.get("/api/urls");
    dispatch(load(urls));
  } catch (err) {
    dispatch(error(err.message));
  }
};
