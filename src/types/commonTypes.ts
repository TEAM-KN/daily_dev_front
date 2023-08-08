export type TRouterItem = {
  path: string
  element: React.ReactNode
}

export type TLoginInfo = {
  email: string
  password: string
}

export type TUserInfo = {
  email: string
  nickname: string
  password: string
  passwordConfirm: string
  imageUrl: null
  imageFile: null
  siteCodes: string[]
}

export type TSites = {
  siteCode: string
  siteName: string
  siteDesc: string
  createDate: string
  updateDate: string
}

export type TSiteLabel = {
  siteCode: string
  siteName: string
  margin?: string
}
