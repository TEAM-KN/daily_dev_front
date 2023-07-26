import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetUserInfo } from './useSetUserInfo'

export const useLogout = () => {
  const { removeUserInfo } = useSetUserInfo()
  const navigate = useNavigate()

  const logout = () => {
    removeUserInfo()

    setTimeout(() => {
      navigate('/')
    })
  }

  return { logout }
}
