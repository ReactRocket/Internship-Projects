import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../slice/api.slice";
import paginationReducer from "../slice/pagination.slice";

const store = configureStore({
    reducer: {
        api: apiReducer,
        pagination: paginationReducer
    }
})

export default store;
