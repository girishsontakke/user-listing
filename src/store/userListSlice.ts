import { Dispatch, createSlice } from "@reduxjs/toolkit";
import service from "Network/service";
import { User } from "react-app-env";

interface initialStateInterface {
  loading: boolean;
  error: Error | null;
  userList: User[];
  total: number;
}
const initialState: initialStateInterface = {
  loading: false,
  error: null,
  userList: [],
  total: 0
};

const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    fetchUserListStart: (state) => {
      state.loading = true;
    },
    fetchUserListSuccess: (state, action) => {
      state.loading = false;
      state.userList = action.payload.data;
      state.total = action.payload.total;
    },
    fetchUserListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { fetchUserListFail, fetchUserListStart, fetchUserListSuccess } =
  userListSlice.actions;

export const fetchUserList = () => async (dispatch: Dispatch) => {
  dispatch(fetchUserListStart());
  try {
    const users = await service.getUserList();
    dispatch(fetchUserListSuccess(users));
  } catch (error) {
    dispatch(fetchUserListFail(error));
  }
};

export default userListSlice;
