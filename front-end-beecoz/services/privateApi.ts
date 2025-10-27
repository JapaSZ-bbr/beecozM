import axios from "axios"

export const privateApi = axios.create({
    baseURL: "http://192.168.3.11:8080"
})