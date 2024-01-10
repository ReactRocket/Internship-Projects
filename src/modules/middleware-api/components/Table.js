import React, { useState } from 'react';
import { Modal } from './Modal';

export const Table = ({ data, dispatch, delData, putData }) => {
    const [isModal, setIsModal] = useState(false)
    const [userData, setUserData] = useState({})
    const headers = Object.keys(data?.[0] || {});

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(delData(id))
        }
    };

    const handleEdit = (id) => {
        setIsModal(!isModal);
        setUserData(data.filter(val => val.id === id)[0])
    }




    return (
        <div className="container max-w-full px-4 mx-auto sm:px-8">
            {
                isModal && <Modal isModal={isModal} setIsModal={setIsModal} dispatch={dispatch} putData={putData} userData={userData} />
            }
            <div className="py-5">
                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    {headers.map((val, i) => (
                                        <th
                                            key={i}
                                            scope="col"
                                            className="px-5 py-3 text-sm font-normal text-gray-800 uppercase bg-white border-b border-gray-200 text-center "
                                        >
                                            {val}
                                        </th>
                                    ))}
                                    <th
                                        key={-1}
                                        scope="col"
                                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                                    >
                                        Operation
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='max-h-screen overflow-y-scroll'>
                                {data?.map((val, i) => (
                                    <tr key={i}>
                                        {headers.map((key, j) => (
                                            <td
                                                key={j}
                                                className="px-5 py-5 text-sm bg-white border-b border-gray-200"
                                            >
                                                <p className="text-gray-900 whitespace-no-wrap ">
                                                    {val[key]}
                                                </p>
                                            </td>
                                        ))}
                                        <td
                                            key={-1}
                                            className="flex items-center justify-around px-5 py-10 text-sm bg-white border-b border-gray-200"
                                        >
                                            <p className="text-yellow-500 whitespace-no-wrap cursor-pointer" onClick={() => handleEdit(val.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                </svg>
                                            </p>
                                            <p className="text-red-500 whitespace-no-wrap cursor-pointer" onClick={() => handleDelete(val.id)} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                                </svg>
                                            </p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};
