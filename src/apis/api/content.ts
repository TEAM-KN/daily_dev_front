import { customAxios } from '../config'

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
