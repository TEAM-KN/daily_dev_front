import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

type userInfoType = {
  email: string
  nickname: string
}

export const userInfoState = atom<userInfoType>({
  key: 'userInfo',
  default: {
    email: '',
    nickname: '',
  },
  effects_UNSTABLE: [persistAtom],
})
