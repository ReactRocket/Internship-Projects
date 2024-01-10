import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, postData, putData, delData } from '../middleware/apiMiddleware';
import { setTotalPages, setPerPage, setNextPage, setPrevPage, setCurrentPage } from "../redux/slice/pagination.slice"
import { Table } from './Table';
import { Modal } from './Modal.js';
import { Loading } from '../../../components/Loading.js'
import { Paginations } from './Paginations.js';
import { Pagination } from './Pagination.js';
import { useNavigate } from 'react-router-dom';

export const DisplayData = () => {
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();
  const nevigate = useNavigate()

  const { loading, data, error, deleteDataMessage, postDataMessage, updateDataMessage } = useSelector((state) => state.api);
  const { currentPage, perpage, totalPages } = useSelector((state) => state.pagination);

  useEffect(() => {
    if (!!deleteDataMessage || !!postDataMessage || !!updateDataMessage) {
      dispatch(getData(currentPage, perpage));
    } else {
      dispatch(getData(currentPage, perpage));
    }
  }, [currentPage, deleteDataMessage, postDataMessage, updateDataMessage]);


  // const handleScroll = () => {
  //   const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
  //   if (bottom && currentPage < totalPages - 1) {
  //     dispatch(setNextPage())
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [dispatch, currentPage]);

  return (
    <>
      <div className='-z-0 max-w-screen max-h-screen text-center'>
        {/* Fixed Header */}
        <div className='fixed top-0 w-full bg-white shadow-md'>
          <h1 className='text-3xl font-bold mt-5'>Manage User Data Using MiddleWareApi</h1>
          <div className='flex justify-between my-5 px-10'>
            <button onClick={() => nevigate(-1)} className="bg-black hover:bg-gray-900 text-white rounded-full font-bold p-2 px-4">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                  <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                </svg>
              </span>
            </button>
            <button onClick={() => setIsModal(!isModal)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-2">
              <span> Add User</span>
            </button>
          </div>
        </div>

        {/* Padding to prevent overlap */}
        <div style={{ paddingTop: '100px' }}>
          {/* Modal */}
          {isModal && <Modal data={data} isModal={isModal} setIsModal={setIsModal} dispatch={dispatch} postData={postData} />}

          {/* Content */}
          {loading || deleteDataMessage || postDataMessage || updateDataMessage ? (
            <Loading />
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <div>
              {data && data.length > 0 ? (
                <Table data={data} dispatch={dispatch} delData={delData} putData={putData} />
              ) : (
                <div>No data available</div>
              )}
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className='fixed bottom-0 w-full flex justify-center items-center py-5 bg-white shadow-md'>
          <Paginations />
        </div>
      </div>
    </>
  );
};



