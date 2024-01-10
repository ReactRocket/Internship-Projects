import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/slices/RegisterSlice";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Register = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isValidate, setIsValidate] = useState(true);
  // const [isSuggestion, setIsSuggestion] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.register);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
    suggestedEmails: [],
  });

  const suggestEmail = (firstName, lastName, mobile) => {
    // Convert first name and last name to lowercase and remove any special characters
    const cleanFirstName = firstName.toLowerCase();
    const cleanLastName = lastName.toLowerCase();

    // Generate suggestions
    const suggestions = [
      `${cleanFirstName}${cleanLastName}@gmail.com`,
      `${cleanFirstName}${cleanLastName}${mobile.slice(0, 3)}@gmail.com`,
      `${cleanFirstName}${cleanLastName.slice(0, 2)}@gmail.com`,
      `${cleanFirstName}${cleanLastName.slice(0, 2)}${mobile.slice(
        0,
        3
      )}@gmail.com`,
    ];
    return suggestions;
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "mobile") {
      const newValue = e.target.value.replace(/[^0-9]/g, "");
      setFormData({ ...formData, mobile: newValue });
    }
    if (e.target.name === "fname") {
      const newValue = e.target.value.replace(/[^a-zA-Z$]/g, "");
      setFormData({ ...formData, fname: newValue });
    }
    if (e.target.name === "lname") {
      const newValue = e.target.value.replace(/[^a-zA-Z$]/g, "");
      setFormData({ ...formData, lname: newValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, password, cpassword } = formData;

    if (isValidate) {
      if (!fname || !lname || !email || !mobile || !password || !cpassword) {
        toastr.warning("All fields are required!");
        return;
      }

      if (!/^\w+@\w+\.\w+$/.test(email)) {
        toastr.error("Please enter a valid email");
        return;
      }

      if (
        !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          password
        )
      ) {
        toastr.error(
          "Password must be Minimum eight characters, at least one letter, one number and one special character:"
        );
        return;
      }

      if (password !== cpassword) {
        toastr.error("Password does not match!");
        return;
      }

      const userExists = user.some((user) => user.email === email);

      debugger;
      if (userExists) {
        toastr.error("Email already exists! Please use a different email");
        const suggestedEmails = suggestEmail(
          formData.fname,
          formData.lname,
          formData.mobile
        );
        setFormData({ ...formData, suggestedEmails });
        return;
      }
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch(
        registerUser({
          fname: fname,
          lname: lname,
          email: email,
          mobile: mobile,
          password: password,
        })
      );
      setFormData({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
        suggestedEmails: [],
      });
      toastr.success(`User form registered successfully`);
    }, 1000);
  };

  return (
    <div>
      <section className=" h-screen w-screen flex justify-center items-center">

        <div className="flex justify-center items-center w-full h-full">
          <div className="w-1/2 flex items-center justify-center  rounded-lg bg-transparent  shadow-xl shadow-blue-500 backdrop-blur-md p-10">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              {/* <p className="mt-2 text-base text-gray-600">
                Already have an account?{" "}
                <a
                  href="#"
                  title=""
                  className="font-medium text-white transition-all duration-200 hover:underline"
                >
                  Sign In
                </a>
              </p> */}
              <form onSubmit={handleSubmit}>
                <h2 className="text-3xl font-bold pb-5 leading-tight text-white sm:text-4xl">
                  Sign up
                </h2>
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-white"
                    >
                      {" "}
                      First Name{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border text-white  border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="First Name"
                        id="name"
                        name="fname"
                        value={formData.fname}
                        onChange={handleOnChange}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-white"
                    >
                      {" "}
                      Last Name{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Last Name"
                        id="name"
                        name="lname"
                        value={formData.lname}
                        onChange={handleOnChange}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-white"
                      >
                        {" "}
                        Mobile{" "}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="phone"
                        maxLength="10"
                        placeholder="Mobile"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleOnChange}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-white"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        list="email_list"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => {
                          handleOnChange(e);
                        }}
                      ></input>
                      <datalist id="email_list">
                        {formData.suggestedEmails.map((email, id) => {
                          return <option key={id} value={email} />;
                        })}
                        {/* {user.map((data, id) => {
                          return <option key={id} value={data.email} />;
                        })} */}
                      </datalist>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-white"
                      >
                        {" "}
                        Password{" "}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleOnChange}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-white"
                      >
                        {" "}
                        Confirm Password{" "}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Confirm Password"
                        id="password"
                        name="cpassword"
                        value={formData.cpassword}
                        onChange={handleOnChange}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full gap-5 items-center justify-center rounded-md bg-blue-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-500/80"
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
                          {"Process"}
                        </>
                      ) : (
                        <>
                          Create Account{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-arrow-right"
                            viewBox="0 0 16 16"
                            className="ml-2"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
              {/* <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border text-white border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-white focus:bg-gray-100 focus:text-white focus:outline-none"
                >
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </span>
                  Sign up with Google
                </button>
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border text-white border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-white focus:bg-gray-100 focus:text-white focus:outline-none"
                >
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-[#2563EB]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </span>
                  Sign up with Facebook
                </button>
              </div> */}
            </div>
          </div>
          {/* <div className="h-full flex justify-center items-center  w-1/2">
            <img className="mx-auto w-full p-16" src={signUpGif} alt="" />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Register;

// const suggestEmail = (firstName, lastName) => {
//   // Convert first name and last name to lowercase and remove any special characters
//   const cleanFirstName = firstName.toLowerCase().replace(/[^a-z]/g, "");
//   const cleanLastName = lastName.toLowerCase().replace(/[^a-z]/g, "");

//   // Generate suggestions
//   const suggestions = [
//     `${cleanFirstName}.${cleanLastName}@gmail.com`,
//     `${cleanFirstName}${cleanLastName}@gmail.com`,
//     `${cleanFirstName}.${cleanLastName.slice(0, 2)}@gmail.com`,
//     `${cleanFirstName}${cleanLastName.slice(0, 2)}@gmail.com`,
//   ];

//   // Check if suggested emails are unique and available
//   // (You can use a backend API or any other logic here)
//   const availableSuggestions = suggestions.filter((email) => {
//     // ... logic to check if email is available ...
//     user.some((user) => user.email === email);
//   });

//   return availableSuggestions;
// };

// // Update state with suggested emails
// if (e.target.name === "fname" || e.target.name === "lname") {
//   const suggestedEmails = suggestEmail(formData.fname, formData.lname);
//   setFormData({ ...formData, suggestedEmails });
// }

// <ul>
// {formData.suggestedEmails.map((email, index) => (
//   <li key={index}>{email}</li>
// ))}
//       </ul>
