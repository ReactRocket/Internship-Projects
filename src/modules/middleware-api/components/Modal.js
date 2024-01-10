import React, { useState, useEffect } from 'react';

export const Modal = ({ isModal, setIsModal, dispatch, postData, putData, userData,data }) => {
    const [formData, setFormData] = useState({
        id: null,
        name: "",
        email: "",
        gender: "male",
        status: "active"
    })

    useEffect(() => {
        if (putData && userData) {
            setFormData(userData)
        }
    }, [putData]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (postData) {
            dispatch(postData(formData,data))
            setIsModal(!isModal)
        }

        if (putData && userData) {
            let id = userData.id
            dispatch(putData(formData, id))
            setIsModal(!isModal)
        }
    }
    return (
        <>

            {isModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center overlay" >
                    <div className="bg-white p-6 rounded shadow-md w-1/2">
                        <div className="flex justify-end">
                            <button className="text-gray-500 hover:text-gray-700" onClick={() => setIsModal(!isModal)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">{(putData && userData) ? "Edit User Data" : "Add User Data"} </h2>

                        </div>
                        <form className="w-full px-10" onSubmit={handleSubmit}>
                            <div className="flex items-center justify-center border-b border-teal-500 py-2">
                                <input onChange={handleInputChange} value={formData.name} required className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" name='name' placeholder="Name" aria-label="Full name" />

                            </div>
                            <div className="flex items-center justify-center border-b border-teal-500 py-2">
                                <input onChange={handleInputChange} value={formData.email} required className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" aria-label="email" name='email' />

                            </div>
                            <div className="flex items-center justify-start border-b border-teal-500 py-2 px-2">
                                <div className='flex gap-2 justify-center align-middle'>
                                    <label className='text-gray-500' htmlFor="Male">Male</label>
                                    <input onChange={handleInputChange} value={"male"} className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" checked={formData.gender === 'male'} id='Male' type="radio" aria-label="Gender" name='gender' />
                                </div>
                                <div className='flex gap-2 justify-center align-middle'>
                                    <label className='text-gray-500' htmlFor="Female">Female</label>
                                    <input onChange={handleInputChange} value={"female"} className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id='Female' type="radio" aria-label="Gender" name='gender' checked={formData.gender === 'female'} />
                                </div>
                            </div>
                            <div className="flex items-center justify-start border-b border-teal-500 py-2">

                                <select onChange={handleInputChange} value={formData.status} name='status' className="appearance-none bg-transparent border-none w-1/2 text-gray-500 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Jane Doe" aria-label="status" >
                                    <option value={"active"}>Active</option>
                                    <option value={"inactive"}>Inactive</option>
                                </select>

                            </div>
                            <div className='mt-5 flex justify-between items-center'>

                                <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                                    Save
                                </button>
                                <button onClick={() => setIsModal(!isModal)} className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:bg-teal-500 hover:text-white text-sm py-1 px-2 rounded" type="button">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
