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

// 이메일 중복확인
export const getAuthIsCheck = async (email: string): Promise<any> => {
  const { data } = await customAxios.get(`/auth/isCheck?email=${email}`)
  return data
}
