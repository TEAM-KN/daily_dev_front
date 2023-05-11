import axios, { Axios, AxiosInstance } from 'axios'

export const customAxios: AxiosInstance = axios.create({
    baseURL: `http://localhost:8080`,
    headers: {
        access_token: ''
    }
});