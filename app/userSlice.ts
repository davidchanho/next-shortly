import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  id?: string;
}

interface UserState {
  user: IUser;
  loading: boolean;
  error: string;
}

const initialState = {
  user: { id: "" },
  loading: false,
  error: "",
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.user.id = '123'
      state.loading = false
    },
    logout: (state) => {
      state.user.id = ''
      state.loading = false
    }
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
