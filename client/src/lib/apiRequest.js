import axios from "axios";

const apiRequrest = axios.create({
    baseURL: "http://localhost:8800/api",
    withCredentials: true,
});

export default apiRequrest;