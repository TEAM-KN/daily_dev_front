import axios from 'axios'

export const customAxios = axios.create({
  baseURL: `http://http://3.239.26.220:8080/dailyb`,
  timeout: 60000,
})

customAxios.interceptors.request.use(
  (config) => {
    const header = config.headers || {}
    const token = localStorage.getItem('access_token')
    header.Authorization = token ? `Bearer ${token}` : ''

    return config
  },
  (error) => Promise.reject(error),
)

customAxios.interceptors.response.use(
  async (response) => {
    const { config } = response

    if (
      response.data?.code === 401 &&
      response.data?.message === 'TOKEN_EXPIRATION'
    ) {
      const refreshToken = localStorage.getItem('refresh-token')
      await customAxios
        .post('/auth/token', { refreshToken })
        .then((token) => {
          if (token.data.accessToken && token.data.refreshToken) {
            localStorage.setItem('access-token', token.data.accessToken)
            localStorage.setItem('refresh-token', token.data.refreshToken)

            config.headers.Authorization = token.data.accessToken
            return axios(config)
          }
        })
        .catch((error) => console.log(error)) // refresh token 만료 시 로그인 유도하도록 개발 필요
    }

    return response
  },
  (error) => console.log('axios error', error),
)
