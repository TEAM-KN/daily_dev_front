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
  try {
    const response = await customAxios.post(`/auth/join`, formData)
    const accessToken = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0NDFAZGFpbHkuZGV2IiwiaWF0IjoxNjg5MDA2MTE0LCJleHAiOjE2ODkwMDk3MTR9.I8sr8Nmyb2x9GFXh8QdXDUbFu8jjJNFVqv9f9mF1Hgc`
    localStorage.setItem('access-token', accessToken)
    return response.data
  } catch (error: any) {
    throw new Error(error)
  }
}

// 이메일 중복확인
export const getAuthIsCheck = async (email: string): Promise<any> => {
  const { data } = await customAxios.get(`/auth/isCheck?email=${email}`)
  return data
}

// 로그인
export const getAuthLogin = async (loginInfo: object): Promise<any> => {
  const { data } = await customAxios.post(`/auth/login`, loginInfo)
  return data
}

// 회원정보 조회
export const getUserInfo = async (email: string): Promise<any> => {
  const { data } = await customAxios.get(`/user?email=${email}`)
  return data
}
