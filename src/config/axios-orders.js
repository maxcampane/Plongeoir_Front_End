import axios from "axios";

const instance = axios.create({
    headers: {
        "Access-Control-Allow-Origin": '*',
    },
    baseURL: "http://localhost:8080",
});

export default instance;