import { atom } from 'recoil'

type TmodalState = {
  open: boolean
  type?: string
  title?: string
  desc?: string
  cancleBtn?: string
  confirmBtn?: string
  callback?: (data?: any) => void
}

// type
// - confirm
// - alert
// - password

export const modalState = atom<TmodalState>({
  key: 'modal',
  default: {
    open: false,
    type: '',
    title: '',
    desc: '',
    cancleBtn: '',
    confirmBtn: '',
    callback: (data: any) => {},
  },
})
