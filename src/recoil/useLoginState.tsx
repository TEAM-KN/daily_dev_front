import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedIn',
  default: false,
  effects_UNSTABLE: [persistAtom],
})
