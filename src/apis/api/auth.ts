import { customAxios } from '../config'

// 회원가입
export const postAuthJoin = async (formData: object): Promise<any> => {
  const { data } = await customAxios.post(`/auth/join`, formData)
  localStorage.setItem('access-token', data.accessToken)
  localStorage.setItem('refresh-token', data.refreshToken)
  return data
}

// 로그인
export const getAuthLogin = async (loginInfo: object): Promise<any> => {
  const { data } = await customAxios.post(`/auth/login`, loginInfo)
  localStorage.setItem('access-token', data.accessToken)
  localStorage.setItem('refresh-token', data.refreshToken)
  return data
}

// 이메일 중복확인
export const getAuthIsCheck = async (email: string): Promise<any> => {
  const { data } = await customAxios.get(`/auth/isCheck?email=${email}`)
  return data
}
