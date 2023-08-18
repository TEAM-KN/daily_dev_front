import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { TSites } from '../types/commonTypes'
const { persistAtom } = recoilPersist()

type userInfoType = {
  email: string
  nickname: string
  sites: TSites[]
}

export const userInfoState = atom<userInfoType>({
  key: 'userInfo',
  default: {
    email: '',
    nickname: '',
    sites: [],
  },
  effects_UNSTABLE: [persistAtom],
})
