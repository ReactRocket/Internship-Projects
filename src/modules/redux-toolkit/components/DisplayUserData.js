import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAllUsers, removeOneUser } from "../store/slices/UserSlice";
import bg_user_disp from "../utils/image/bg-user-disp.svg";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const DisplayUserData = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => {
    return state.users;
  });

  const handleDelete = (id) => {
    dispatch(removeOneUser(id));
    toastr.success("User deleted successfully!");
  };
  const handleDeleteAll = () => {
    if (window.confirm("Are you sure you want to delete all users?")) {
      if (userData.length <= 0) {
        toastr.alert("No User Exist!");
      } else {
        dispatch(removeAllUsers());
        toastr.success("All the users are deleted successfully!");
      }
    }
  };
  return (
    <div
      className=" h-screen w-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg_user_disp})` }}
    >
      {userData.length > 0 ? (
        <div className="flex flex-col pt-10">
          <h1 className="text-center text-xl text-white font-bold">
            Manage User Data
          </h1>
          <div className=" sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-transparent  border-b px-5">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Gender
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium flex justify-between text-white px-6 py-4 text-left"
                      >
                        Operations
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          onClick={handleDeleteAll}
                          className="bi bi-recycle text-red-600 px-5 lg:px-0 cursor-pointer"
                        >
                          <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
                        </svg>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((data, id) => {
                      return (
                        <tr className="bg-transparent border-b" key={id}>
                          <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                            {data.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                            {data.email}
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                            {data.age}
                          </td>
                          <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                            {data.gender === "Male" ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-gender-male w-8"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-gender-female w-8"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"
                                />
                              </svg>
                            )}
                          </td>
                          <td className="px-14 text-sm text-white font-light text-left py-6  whitespace-nowrap">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              className="bi bi-trash3 text-yellow-500 cursor-pointer"
                              onClick={() => handleDelete(id)}
                            >
                              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                            </svg>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // <div className="w-full h-full flex justify-center items-center">
        //   <img src={noDataFoundGIf1} className="w-1/3" alt="NO Data Found..." />
        // </div>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" w-16 h-16 text-gray-500 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>

            <p className="mt-4 text-gray-500 ">No data found</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayUserData;
