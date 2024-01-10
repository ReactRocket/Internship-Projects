import axios from "axios";

const accessToken =
  "53a6801d6252318add7991f95c993ae2820c4ba06a6826d0362eace3e32063cf";

const API = axios.create({
  baseURL: "https://gorest.co.in",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

export default API;
