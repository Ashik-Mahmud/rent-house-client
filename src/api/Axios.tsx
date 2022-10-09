import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const cookie = cookies.get("user");
const token = cookie?.token;

export const AxiosUser = axios.create({
  baseURL: "http://localhost:5000/api/v1/users",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
