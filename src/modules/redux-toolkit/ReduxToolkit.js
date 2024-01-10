import React, { useState } from "react";
import store from "./store/index";
import { Provider } from "react-redux";
import Form from "./components/Form";
import DisplayUserData from "./components/DisplayUserData";
import Register from "./components/Register";
import main_bg from "./utils/illustration/main_bg.svg";
import Backbtn from "../../components/Backbtn";
const ReduxToolkit = () => {
  const [isForm, setIsForm] = useState("");

  return (
    <Provider store={store}>
      <div
        className="flex justify-center items-center w-screen h-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${main_bg})` }}
      >
        {isForm === "Register" ? (
          <Register />
        ) : isForm === "Form" ? (
          <Form />
        ) : isForm === "DisplayUserData" ? (
          <DisplayUserData />
        ) : (
          <>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <button
                type="button"
                onClick={() => setIsForm("Register")}
                className="rounded-md border border-yellow-600 px-3 py-2 text-sm font-semibold text-yellow-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                Register
              </button>
              <button
                type="button"
                onClick={() => setIsForm("Form")}
                className="rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Form
              </button>
              <button
                type="button"
                onClick={() => setIsForm("DisplayUserData")}
                className="rounded-md border border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Display
              </button>
            </div>
          </>
        )}

        <Backbtn />
        <button
          onClick={() => setIsForm("")}
          type="button"
          className="fixed top-5 right-5 flex justify-center items-center rounded-full aspect-square bg-blue-500 p-2 text-3xl font-semibold text-white hover:bg-blue-500/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>
    </Provider>

  );
};

export default ReduxToolkit;
