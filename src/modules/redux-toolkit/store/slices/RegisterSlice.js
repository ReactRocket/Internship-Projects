import { createSlice } from "@reduxjs/toolkit";

const RegisterSlice = createSlice({
  name: "register",
  initialState: [],
  reducers: {
    registerUser(state, action) { 
      state.push(action.payload);
    },
    // removeOneUser(state, action) {
    //   state.splice(action.payload, 1);
    // },
    // removeAllUsers(state, action) {
    //   state.length = 0;
    // },
  },
});

export default RegisterSlice.reducer;
export const { registerUser} = RegisterSlice.actions;
