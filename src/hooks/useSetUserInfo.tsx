import React from 'react'
import { useSetRecoilState, useResetRecoilState } from 'recoil'
import { userInfoState } from '../recoil/userInfo'

export const useSetUserInfo = () => {
  const setUserInfoState = useSetRecoilState(userInfoState)
  // const resetUserInfo = useResetRecoilState(userInfoState)

  // 회원정보 저장
  const setUserInfo = (email: string, nickname: string) => {
    setUserInfoState({
      email: email,
      nickname: nickname,
    })
  }

  return { setUserInfo }
}
