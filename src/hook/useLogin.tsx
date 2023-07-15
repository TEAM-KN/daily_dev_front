import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { getAuthLogin } from '../service/apis'

export const useLogin = () => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation(getAuthLogin, {
    onSuccess: (data) => {
      console.log(data)
      navigate('/')
      localStorage.setItem('email', data.email)
      localStorage.setItem('nickname', data.nickname)
      localStorage.setItem('access-token', 'token')
    },
    onError: () => {
      setErrorMessage('이메일이나 비밀번호를 다시 확인해주세요')
    },
  })

  const login = (data: any) => {
    mutate(data)
  }
  return { login, isLoading, errorMessage, setErrorMessage }
}
