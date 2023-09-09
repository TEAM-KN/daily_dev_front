import { customAxios } from '../config'

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

// 회원 정보 수정
export const postUserInfo = async (formData: object): Promise<any> => {
  const { data } = await customAxios.post(`/user`, formData)
  return data
}

// 회원 구독 정보 수정
export const postUserSites = async (formData: object): Promise<any> => {
  const { data } = await customAxios.post(`/user/sites`, formData)
  return data
}

// 회원 구독 정보 삭제
export const deleteUserSites = async (email: string): Promise<any> => {
  const { data } = await customAxios.delete(`/user/sites?email=${email}`)
  return data
}

// 회원 정보 검증 (패스워드 검증)
export const postUserCheck = async (formData: object): Promise<any> => {
  const { data } = await customAxios.post(`/user/check`, formData)
  return data
}

// 패스워드 수정
export const postUserPassword = async (formData: object): Promise<any> => {
  const { data } = await customAxios.post(`/user/password`, formData)
  return data
}
