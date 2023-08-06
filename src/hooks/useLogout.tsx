import React from 'react'
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()

    setTimeout(() => {
      navigate('/')
    })
  }

  return { logout }
}
