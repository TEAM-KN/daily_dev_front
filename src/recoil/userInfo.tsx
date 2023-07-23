import { atom } from 'recoil'

type userInfoType = {
  email: string
  nickname: string
}

export const userInfoState = atom<userInfoType>({
  key: 'userInfoState',
  default: {
    email: '',
    nickname: '',
  },
})
