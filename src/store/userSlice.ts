import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null
  },
  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    fetchUserFail: (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    }
  }
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFail } =
  userSlice.actions;

export default userSlice;
