import React, { useEffect, useState } from "react";
import axios from "./axios";
import {  useNavigate } from "react-router-dom";
import { Modal } from "antd";
import activeIcon from "../image/icons8-active-67.png";
import inactiveIcon from "../image/icons8-inactive-67.png";
import toastr from "toastr";
import "toastr/build/toastr.css";

const Crud = () => {
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [myData, setMyData] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const [editedIndex, setEditedIndex] = useState(null);
  const [isEditBtn, setIsEditBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGender, setselectedGender] = useState("all");
  const [selectedStatus, setselectedStatus] = useState("all");

  // using asynchronously to await
  const getApiData = async () => {
    try {
      const res = await axios.get("/public/v2/users");
      let filteredData = res.data;

      if (selectedGender !== "all") {
        filteredData = filteredData.filter(
          (user) => user.gender === selectedGender
        );
      }
      if (selectedStatus !== "all") {
        filteredData = filteredData.filter(
          (user) => user.status === selectedStatus
        );
      }

      setMyData(filteredData);
    } catch (error) {
      toastr.error(error.message);
    }
  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData };

    // Validate input value based on input name
    // eslint-disable-next-line default-case
    switch (name) {
      case "email":
        const emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = emailRegex.test(value);
        if (!isValidEmail) {
          setIsError(true);
          setErrorMessage("Invalid email");
          return; // Prevent invalid email from updating state
        }
        break;
      case "password":
        const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+-]+$/;
        const isValidPassword = passwordRegex.test(value);
        if (!isValidPassword) {
          setIsError(true);
          setErrorMessage(
            "Password must contain at least one letter, one number, and one special character"
          );
          return; // Prevent invalid password from updating state
        }
        break;
      // Add additional validation cases for other input fields
    }

    // Update form data with validated value
    updatedFormData[name] = value;
    setFormData(updatedFormData);
  };

  const createPost = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/public/v2/users", formData);

      setMyData([...myData, res.data]);
      toastr.success("User created successfully");

      setFormData({
        id: null,
        name: "",
        email: "",
        gender: "",
        status: "",
      });
      setIsModalOpen(!isModalOpen);
      getApiData();
    } catch (error) {
      // alert(error.message);
      toastr.error(error.message);
    }
  };

  const handelEdit = (val) => {
    const { id, name, email, gender, status } = val;

    setFormData({
      id: id,
      name: name,
      email: email,
      gender: gender,
      status: status,
    });
    setIsModalOpen(!isModalOpen);
  };

  const updatePost = async () => {
    const id = myData[editedIndex].id;
    try {
      const res = await axios.put(`/public/v2/users/${id}`, formData);
      setMyData([...myData, res.data]);
      toastr.success("User updated successfully");

      setFormData({
        id: null,
        name: "",
        email: "",
        gender: "",
        status: "",
      });
      setIsModalOpen(!isModalOpen);
      getApiData();
    } catch (error) {
      // alert();
      toastr.error(error.message);
    }
  };

  const deletePost = async (index) => {
    const id = myData[index].id;
    try {
      const res = await axios.delete(`/public/v2/users/${id}`, formData);
      setMyData([...myData, res.data]);

      toastr.success("User deleted successfully");

      setFormData({
        id: null,
        name: "",
        email: "",
        gender: "",
        status: "",
      });
      getApiData();
    } catch (error) {
      // alert(error.message);
      toastr.error(error.message);
    }
  };

  useEffect(() => {
    getApiData();
    console.log(isLoading);
    setEditedIndex(editedIndex);
    setselectedGender(selectedGender);
    setselectedStatus(selectedStatus);
    console.log(myData);
    setErrorMessage(errorMessage);
    setIsError(isError);
  }, [
    editedIndex,
    selectedGender,
    selectedStatus,
    isLoading,
    isError,
    errorMessage,
  ]);

  const showModal = () => {
    setIsModalOpen(true);
    setIsEditBtn(false);
    setFormData({
      id: null,
      name: "",
      email: "",
      gender: "",
      status: "",
    });
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setIsEditBtn(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsEditBtn(false);
  };

  const handelUserPosts = (id, event) => {
    event.stopPropagation();
    navigate(`/dashboard/projects/crud/posts/${id}`);
  };
  const handelUserComment = (id) => {
    navigate(`/dashboard/projects/crud/comments/${id}`);
  };
  const handleChangeGenderFilter = (event) => {
    const filter = event.target.value;
    debugger;
    setselectedGender(filter);
    getApiData();
  };
  const handleChangeStatusFilter = (event) => {
    const filter = event.target.value;
    setselectedStatus(filter);
    getApiData();
  };

  return (
    <>
      <div>
        <Modal
          title={isEditBtn ? "Edit User Data" : "Add New User"}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{ hidden: true }}
          cancelButtonProps={{ hidden: true }}
        >
          <div className="flex justify-center items-center ">
            <div className="w-full max-w-full">
              <form
                className="bg-white  rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={createPost}
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name "
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email "
                  />
                  {errorMessage === "Invalid email" ? (
                    <label
                      id="email-error"
                      className="hidden text-red-600 pt-1 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      {errorMessage}
                    </label>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <input
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="gender"
                    name="gender"
                    type="text"
                    value={formData.gender}
                    onChange={handleChange}
                    placeholder="Enter gender "
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <input
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="status"
                    name="status"
                    type="text"
                    value={formData.status}
                    onChange={handleChange}
                    placeholder="Enter status "
                  />
                </div>

                <div className="flex items-center justify-start">
                  {isEditBtn ? (
                    <button
                      className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => {
                        updatePost();
                      }}
                    >
                      Edit
                    </button>
                  ) : (
                    <>
                      <button
                        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Save
                      </button>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </Modal>
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
          <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h2 className="text-lg font-semibold">Users data</h2>
              <p className="mt-1 text-sm text-gray-700">
                This is a list of all users data. You can add new user , edit or
                delete existing ones.
              </p>
            </div>
          </div>
          <div className=" py-5 flex  justify-between">
            <div className=" flex ">
              <button
                type="button"
                onClick={() => {
                  navigate(-1);
                }}
                className="rounded-full bg-black p-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-center items-center">
              <div className="genderFilter ">
                <label htmlFor="genderFilter">Filter By Gender</label>
                <select
                  onChange={handleChangeGenderFilter}
                  className="border-2 p-1 outline-8 mx-2 rounded-lg  "
                  name="genderFilter"
                  id="genderFilter"
                >
                  <option value="all" selected>
                    All
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="statusFilter">
                <label htmlFor="statusFilter">Filter By Status</label>
                <select
                  onChange={handleChangeStatusFilter}
                  className="border-2 p-1 outline-8 mx-2 rounded-lg  "
                  name="statusFilter"
                  id="statusFilter"
                >
                  <option value="all" selected>
                    All
                  </option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <button
                type="button"
                onClick={showModal}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add New User
              </button>
            </div>
          </div>
          <div className="overflow-hidden border  border-gray-200 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                    ID
                  </th>
                  <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                    NAME
                  </th>
                  <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                    EMAIL
                  </th>
                  <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                    GENDER
                  </th>
                  <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                    STATUS
                  </th>

                  <th className="px-4 py-3.5 text-center text-sm font-normal text-gray-700">
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {myData.map((val, index) => {
                  return (
                    <tr
                      key={val.id}
                      className="font-bold  hover:bg-gray-300 cursor-pointer"
                      onClick={() => {
                        handelUserComment(val.id);
                      }}
                    >
                      <td className="whitespace-nowrap px-4 py-4">{val.id}</td>
                      <td className=" whitespace-nowrap px-4 py-4">
                        <span
                          onClick={(event) => {
                            handelUserPosts(val.id, event);
                          }}
                          className="font-bold text-blue-600 hover:text-red-500 cursor-pointer"
                        >
                          {val.name}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        {val.email}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4">
                        {val.gender === "male" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className=" bi bi-gender-male rounded-full bg-cover w-10"
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
                            className="bi bi-gender-female rounded-full  w-10"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"
                            />
                          </svg>
                        )}
                      </td>

                      {val.status === "active" ? (
                        <td className="whitespace-nowrap px-4 py-4">
                          <img
                            className="aspect-square h-4 w-4 shadow-xl animate-pulse transition-colors  shadow-green-500"
                            src={activeIcon}
                            alt=""
                          />
                        </td>
                      ) : (
                        <td className="whitespace-nowrap px-4 py-4">
                          <img
                            className="aspect-square h-4 w-4 shadow-xl  shadow-red-500"
                            src={inactiveIcon}
                            alt=""
                          />
                        </td>
                      )}

                      <td className="whitespace-nowrap flex justify-around px-4 py-4 text-right text-sm font-medium">
                        <button
                          onClick={(event) => {
                            event.stopPropagation();

                            setEditedIndex(index);
                            handelEdit(val);
                            setIsEditBtn(true);
                          }}
                          className="hover:text-gray-700 text-yellow-500 hover:font-semibold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(event) => {
                            event.stopPropagation();

                            if (
                              window.confirm(
                                "Are you want to delete this post?"
                              )
                            ) {
                              deletePost(index);
                            }
                          }}
                          className="hover:text-gray-700  text-red-500 hover:font-semibold"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default Crud;
