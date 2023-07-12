import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    isAuthenticated: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth: (state, { payload }) => {
      state.user.isAuthenticated = payload;
    },
  },
});

export const { setIsAuth } = userSlice.actions;

export default userSlice.reducer;
