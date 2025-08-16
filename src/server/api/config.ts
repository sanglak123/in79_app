import axios from "axios";
const baseUrl = `http:/localhost:${process.env.PORT || "3000"}`;
const root_axios = axios.create({
    withCredentials: true,
    baseURL: "/api"
});

export {
    root_axios,
    baseUrl
}