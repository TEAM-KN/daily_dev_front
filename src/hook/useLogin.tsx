import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { getAuthLogin, getUserInfo } from '../service/apis'

export const useLogin = () => {
  const [email, setEmail] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const navigate = useNavigate()

  // 로그인 API
  const { mutate, isLoading } = useMutation(getAuthLogin)
  // 회원정보 조회 API
  const { refetch } = useQuery(['userInfo', email], () => getUserInfo(email), {
    enabled: false,
    onSuccess: (data) => {
      localStorage.setItem('email', data.email)
      localStorage.setItem('nickname', data.nickname)
      localStorage.setItem('access-token', 'test token')
      navigate('/main')
    },
  })

  useEffect(() => {
    if (email) {
      refetch()
    }
  }, [email])

  const login = (data: any) => {
    mutate(data, {
      onSuccess: () => {
        setEmail(data.email)
      },
      onError: () => {
        setErrorMessage('이메일이나 비밀번호를 다시 확인해주세요')
      },
    })
  }
  return { login, isLoading, errorMessage, setErrorMessage }
}
