import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useResetRecoilState } from 'recoil'
import { userInfoState } from '../recoil/userInfo'

export const useLogout = () => {
  const navigate = useNavigate()
  const resetUserInfo = useResetRecoilState(userInfoState)

  const logout = () => {
    localStorage.removeItem('access-token')
    resetUserInfo()

    setTimeout(() => {
      navigate('/')
    })
  }

  return { logout }
}
