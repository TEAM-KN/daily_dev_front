import { customAxios } from './config'

// 전체 사이트 조회
export const getSites = async (): Promise<any> => {
  const { data } = await customAxios.get('/sites')
  return data
}

// 전체 콘텐츠 조회
export const getContents = async (): Promise<any> => {
  const { data } = await customAxios.get('/contents')
  return data
}

// 특정 사이트의 콘텐츠 조회
export const getContentsOfSite = async (site: string): Promise<any> => {
  const { data } = await customAxios.get(`/content/site?siteCode=${site}`)
  return data
}

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

// 회원정보 조회
export const getUserInfo = async (email: string): Promise<any> => {
  const { data } = await customAxios.get(`/user?email=${email}`)
  return data
}

// 회원탈퇴
export const deleteUser = async (email: string): Promise<any> => {
  const { data } = await customAxios.delete(`/user/leave?email=${email}`)
  return data
}

// 회원 구독 정보 수정
export const postUserSites = async (formData: object): Promise<any> => {
  const { data } = await customAxios.post(`/user/sites`, formData)
  return data
}
