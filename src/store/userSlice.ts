import { Dispatch, createSlice } from "@reduxjs/toolkit";
import service from "Network/service";
import { User } from "react-app-env";

interface initialStateInterface {
  user: User | null;
  loading: boolean;
  error: object | null;
}
const initialState: initialStateInterface = {
  user: null,
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
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

export const fetchUser =
  (userId: number | string) => async (dispatch: Dispatch) => {
    dispatch(fetchUserStart());
    try {
      const user = await service.getUser(userId);
      dispatch(fetchUserSuccess(user.data));
    } catch (error) {
      dispatch(fetchUserFail(error));
    }
  };

export default userSlice;
