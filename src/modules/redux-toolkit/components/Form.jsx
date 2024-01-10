import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import bg_form from "../utils/image/bg-form.svg";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Form = () => {
  // var toastr = require("toastr");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);
  const [selectedRadio, setSelectedRadio] = useState("radioButton1");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "Male",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (event.target.name === "age") {
      const newValue = event.target.value.replace(/[^0-9]/g, "");
      setFormData({ ...formData, age: newValue });
    }
    if (event.target.name === "name") {
      const newValue = event.target.value.replace(/[^a-z A-Z$]/g, "");
      setFormData({ ...formData, name: newValue });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let { name, email, age, gender } = formData;

    if (!name || !email || !age || !gender) {
      toastr.warning("All fields are required!");
      return;
    }

    if (!/^[a-z A-Z]+$/.test(name)) {
      toastr.error("Please enter a valid name");
      return;
    }

    if (!/^\w+@\w+\.\w+$/.test(email)) {
      toastr.error("Please enter a valid email");
      return;
    }

    if (isNaN(age) || age < 1) {
      toastr.error("Please enter a valid age");
      return;
    } else if (age > 100) {
      age = age.slice(0, 2);
    }

    const userExists = userData.some((user) => user.email === email);

    if (userExists) {
      toastr.error("Email already exists! Please use a different email");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch(addUser({ name, email, age, gender }));
      setFormData({ name: "", email: "", age: "", gender: "Male" });
      setSelectedRadio("radioButton1");
      toastr.success(`User form added successfully`);
    }, 2000);
  };

  const handleLabelClick = (radioId) => {
    setSelectedRadio(radioId);
  };

  return (
    <div className="">
      <div
        className="flex items-center flex-col justify-center p-12 h-screen w-screen bg-cover bg-no-repeat overflow-x-hidden "
        style={{ backgroundImage: `url(${bg_form})` }}
      >
        <div className="mx-auto w-full max-w-[550px] p-10 rounded-xl bg-transparent  shadow-2xl shadow-blue-500 backdrop-blur-md hover:scale-100 transition-transform ease-linear delay-100">
          <form onSubmit={handleSubmit}>
            <h1 className="flex gap-2 text-xl text-white font-bold pb-5 justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              User Info
            </h1>

            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-white"
              >
                Name
              </label>
              <input
                onChange={handleInputChange}
                value={formData.name}
                type="text"
                name="name"
                id="name"
                placeholder="Test Name"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-white"
              >
                Email
              </label>
              <input
                onChange={handleInputChange}
                value={formData.email}
                type="text"
                name="email"
                id="email"
                placeholder="test@gmail.com"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="age"
                className="mb-3 block text-base font-medium text-white"
              >
                Age
              </label>
              <input
                onChange={handleInputChange}
                value={formData.age}
                type="text"
                name="age"
                id="age"
                maxlength="2"
                pattern="[0-9]{2}"
                placeholder="0"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-white">
                Gender
              </label>
              <div className="flex items-center w-1/4 ">
                <div className="flex items-center w-full">
                  <input
                    hidden
                    onChange={handleInputChange}
                    value="Male"
                    type="radio"
                    name="gender"
                    id="radioButton1"
                    className="h-5 w-5"
                    checked
                  />
                  <label
                    htmlFor="radioButton1"
                    className={`p-2 cursor-pointer   text-base font-medium rounded-full aspect-square flex justify-center items-center text-white ${
                      selectedRadio === "radioButton1"
                        ? "border border-white "
                        : "border border-transparent"
                    }`}
                    onClick={() => handleLabelClick("radioButton1")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-gender-male"
                      viewBox="0 0 16 16"
                      className="w-full"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
                      />
                    </svg>
                  </label>
                </div>
                <div className="flex items-center w-full">
                  <input
                    hidden
                    type="radio"
                    name="gender"
                    id="radioButton2"
                    className="h-5 w-5"
                    onChange={handleInputChange}
                    value="Female"
                  />
                  <label
                    htmlFor="radioButton2"
                    className={`p-2 cursor-pointer text-base font-medium rounded-full aspect-square flex justify-center items-center text-white ${
                      selectedRadio === "radioButton2"
                        ? "border border-white "
                        : " border border-transparent"
                    }`}
                    onClick={() => handleLabelClick("radioButton2")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-gender-female"
                      viewBox="0 0 16 16"
                      className="w-full"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"
                      />
                    </svg>
                  </label>
                </div>
              </div>
            </div>

            <div>
              {/* <Tooltip
                placement="right"
                title={!isLoading ? "Press enter to submit" : "Submitted"}
              > */}
              <button
                type="submit"
                disabled={isLoading}
                className="flex justify-center gap-3 items-center  rounded-md bg-blue-500 hover:bg-blue-400 px-5 py-3  text-center text-base font-semibold text-white "
              >
                {isLoading ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-clockwise"
                      viewBox="0 0 16 16"
                      className="animation animate-spin"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                      />
                      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                    </svg>{" "}
                    {"Processing"}
                  </>
                ) : (
                  "Submit"
                )}
              </button>
              {/* </Tooltip> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
