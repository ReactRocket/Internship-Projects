import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) { 
      state.push(action.payload);
    },
    removeOneUser(state, action) {
      state.splice(action.payload, 1);
    },
    removeAllUsers(state, action) {
      state.length = 0;
    },
  },
});

export default UserSlice.reducer;
export const { addUser, removeOneUser, removeAllUsers } = UserSlice.actions;
