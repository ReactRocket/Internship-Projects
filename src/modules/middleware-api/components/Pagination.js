import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTotalPages, setPerPage, setNextPage, setPrevPage, setCurrentPage } from '../redux/slice/pagination.slice'
export const Pagination = () => {
    const dispatch = useDispatch()
    const { prevPage
        , currentPage
        , nextPage
        , perPage
        , totalPages } = useSelector((state) => state.pagination)
    return (
        <div className='flex justify-center items-center gap-5'>
            <button
                onClick={() => dispatch(setPrevPage())}
                className='bg-gray-900 text-white p-1 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
            </button>

            <span><input onChange={(e) =>  dispatch(setCurrentPage(e.target.value))} className='w-5 border-none' type='text' value={currentPage} /> of {totalPages}</span>

            <button
                onClick={() => dispatch(setNextPage())}
                className='bg-gray-900 text-white p-1 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
        </div>
    )
}
