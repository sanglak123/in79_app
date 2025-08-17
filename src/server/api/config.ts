import axios from "axios";
const baseUrl = `http:/localhost:${process.env.PORT || "3000"}`;
const root_axios = axios.create({
    withCredentials: true,
    baseURL: "/api"
});

const RenderImageUrl = (folder: string, filename: string) => {
    return `/img/${folder}/${filename}`;
}

export {
    root_axios,
    baseUrl,
    RenderImageUrl
}