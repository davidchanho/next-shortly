import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  value: number;
}

const initialState = { value: 0 } as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;
export default userSlice.reducer;
