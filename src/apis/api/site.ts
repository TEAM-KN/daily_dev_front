import { customAxios } from '../config'

// 전체 사이트 조회
export const getSites = async (): Promise<any> => {
  const { data } = await customAxios.get('/sites')
  return data
}
