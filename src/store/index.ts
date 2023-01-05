import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import userListSlice from "./userListSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  userList: userListSlice.reducer
});
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development"
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
