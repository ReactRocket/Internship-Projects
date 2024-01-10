import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import RegisterSlice from "./slices/RegisterSlice";

const store = configureStore({
  reducer: {
    users: UserSlice,
    register: RegisterSlice,
  },
});

export default store;
