import axios from "axios";

export const api = axios.create({
    baseURL: "https://devlink-mom3.onrender.com",
    withCredentials: true
})