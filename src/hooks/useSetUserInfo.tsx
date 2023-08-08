import React from 'react'
import { useSetRecoilState } from 'recoil'
import { userInfoState } from '../recoil/userInfo'

export const useSetUserInfo = () => {
  const setUserInfoState = useSetRecoilState(userInfoState)

  // 회원정보 저장
  const setUserInfo = (email: string, nickname: string, sites: []) => {
    setUserInfoState({
      email: email,
      nickname: nickname,
      sites: sites,
    })
  }

  return { setUserInfo }
}
