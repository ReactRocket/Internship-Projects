import { createSlice } from "@reduxjs/toolkit";
import toastr from "toastr";

const apiSlice = createSlice({
  name: "api",
  initialState: {
    loading: false,
    data: [],
    message: "",
    error: "",

    deleteDataLoading: false,
    deleteDataMessage: "",
    deleteDataError: "",

    postDataLoading: false,
    postDataMessage: "",
    postDataError: "",

    updateDataLoading: false,
    updateDataMessage: "",
    updateDataError: "",
  },
  reducers: {
    getDataRequest: (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
      state.deleteDataMessage = "";
      state.postDataMessage = "";
      state.updateDataMessage = ""
    },
    getDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getDataError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteDataRequest: (state) => {
      state.deleteDataLoading = true;
      state.deleteDataMessage = null;
      state.deleteDataError = null;
    },
    deleteDataSuccess: (state, action) => {
      state.deleteDataLoading = false;
      state.deleteDataMessage = action.payload;
      toastr.success(state.deleteDataMessage)
    },
    deleteDataError: (state, action) => {
      state.deleteDataLoading = false;
      state.deleteDataError = action.payload;
      toastr.error(state.deleteDataError)

    },

    postDataRequest: (state) => {
      state.postDataLoading = true;
      state.postDataMessage = null;
      state.postDataError = null;
    },
    postDataSuccess: (state, action) => {
      state.postDataLoading = false;
      state.postDataMessage = action.payload;
      toastr.success(state.postDataMessage)
    },
    postDataError: (state, action) => {
      state.postDataLoading = false;
      state.updateDataError = null;
      state.postDataError = action.payload;
      toastr.error(state.postDataError)
    },

    updateDataRequest: (state) => {
      state.updateDataLoading = true;
      state.updateDataMessage = null;
      state.updateDataError = null;
    },
    updateDataSuccess: (state, action) => {
      state.updateDataLoading = false;
      state.updateDataMessage = action.payload;
      toastr.success(state.updateDataMessage)
    },
    updateDataError: (state, action) => {
      state.updateDataLoading = false;
      state.postDataError = null;
      state.updateDataError = action.payload;
      toastr.error(state.updateDataError)
    },
  },
});

export const { getDataRequest,
  getDataSuccess,
  getDataError,
  deleteDataRequest,
  deleteDataSuccess,
  deleteDataError,
  postDataRequest,
  postDataSuccess,
  postDataError,
  updateDataRequest,
  updateDataSuccess,
  updateDataError } = apiSlice.actions;
export default apiSlice.reducer;















// import { createSlice } from "@reduxjs/toolkit";

// const apiSlice = createSlice({
//   name: "api",
//   initialState: {
//     data: null,
//     loading: false,
//     error: null,
//     affected: false,
//   },
//   reducers: {
//     setData: (state, action) => {
//       state.data = action.payload;
//     },
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//     setAffected: (state, action) => {
//       state.affected = action.payload;
//     },
//   }
// });

// export const { setData, setLoading, setError,setAffected } = apiSlice.actions;
// export default apiSlice.reducer;
