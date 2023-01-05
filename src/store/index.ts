import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer
});
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development"
});

export default store;
