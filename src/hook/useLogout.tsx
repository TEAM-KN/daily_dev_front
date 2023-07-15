import React from 'react'
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('nickname')
    localStorage.removeItem('access-token')
    console.log('로그아웃')

    setTimeout(() => {
      navigate('/')
    })
  }

  return { logout }
}
