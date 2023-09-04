import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { isLoggedInState } from '../recoil/useLoginState'

export const useLogout = () => {
  const setIsLoggedInState = useSetRecoilState(isLoggedInState)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    setIsLoggedInState(false)

    setTimeout(() => {
      navigate('/')
    })
  }

  return { logout }
}
