import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "./axios";
import toastr from "toastr";
import "toastr/build/toastr.css";

const Comments = () => {
  const navigate = useNavigate();

  const { id } = useParams(); // Get the ID parameter from the URL
  const [postsData, setPostsData] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const res = await axios.get(`/public/v2/users/${id}`);
      const { name, email, gender, status } = res.data;
      setPostsData({
        name: name,
        email: email,
        gender: gender,
        status: status,
      });
    } catch (error) {
      toastr.error(error.message);
    }
  };
  return (
    <>
      <section className="mx-auto h-screen w-screen max-w-7xl flex justify-center items-center px-4 py-4">
        <div className="w-[300px] rounded-md border">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold">{postsData.name}</h1>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              voluptate repellendus recusandae itaque pariatur veritatis atque.
              Facere, consequuntur. Quidem eligendi, iusto pariatur sequi nulla
              aperiam id repudiandae error minus cum!
            </p>
            <button
              type="button"
              onClick={() => {
                navigate(-1);
              }}
              className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comments;
