import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api-z-fit.onrender.com',
})