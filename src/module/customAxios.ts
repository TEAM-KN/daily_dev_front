import axios, { Axios } from 'axios'

export const customAxios = axios.create({
    baseURL: `http://localhost:8080`,
    timeout: 60000
});

customAxios.interceptors.request.use(
    config => {
        const header = config.headers || {}
        const token = localStorage.getItem('access_token')
        header['Authorization'] = token ? `Bearer ${token}` : ''

        return config
    },
    error => Promise.reject(error)
);

customAxios.interceptors.response.use(
    resonse => resonse
);