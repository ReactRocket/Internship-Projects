import React from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/slice/pagination.slice';
import './pagination.css'
export const Paginations = () => {
  const dispatch = useDispatch()
  const { prevPage
    , currentPage
    , nextPage
    , perPage
    , totalPages } = useSelector((state) => state.pagination)
  const handlePageChange = (selectedPage) => {
    dispatch(setCurrentPage(selectedPage.selected + 1));
  };
  return (
    <ReactPaginate
      marginPagesDisplayed={2}
      previousLabel={'Previous'}
      nextLabel={'Next'}
      breakLabel={'...'}
      pageCount={totalPages}
      pageRangeDisplayed={perPage}
      onPageChange={handlePageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
      breakClassName={'break-me'}
      subContainerClassName={'pages pagination'}
    />
  )
}



