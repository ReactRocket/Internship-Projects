import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        prevPage: 0,
        currentPage: 1,
        nextPage: 0,
        perPage: 10,
        totalPages: 1
    },
    reducers: {
        setTotalPages: (state, action) => {
            state.totalPages = action.payload
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload
        },
        setNextPage: (state) => {
            state.currentPage++
        },
        setPrevPage: (state) => {
            state.currentPage--
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    }
})

export const { setTotalPages, setPerPage, setNextPage, setPrevPage, setCurrentPage } = paginationSlice.actions

export default paginationSlice.reducer