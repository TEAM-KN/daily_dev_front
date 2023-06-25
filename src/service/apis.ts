import { customAxios } from './config'

export const getContents = async (): Promise<any> => {
  const { data } = await customAxios.get('/content')
  return data
}
