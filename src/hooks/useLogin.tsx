import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { isLoggedInState } from '../recoil/useLoginState'
import { getAuthLogin, getUserInfo } from '../service/apis'
import { useSetUserInfo } from './useSetUserInfo'

export const useLogin = () => {
  const setIsLoggedInState = useSetRecoilState(isLoggedInState)
  const [email, setEmail] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const navigate = useNavigate()

  const { setUserInfo } = useSetUserInfo()

  // 로그인 API
  const { mutate, isLoading } = useMutation(getAuthLogin)
  // 회원정보 조회 API
  const { refetch } = useQuery(['userInfo', email], () => getUserInfo(email), {
    enabled: false,
    onSuccess: (data) => {
      setUserInfo(data.email, data.nickname, data.sites)
      navigate('/mypage')
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
        setIsLoggedInState(true)
      },
      onError: () => {
        setErrorMessage('이메일이나 비밀번호를 다시 확인해주세요')
      },
    })
  }
  return { login, isLoading, errorMessage, setErrorMessage }
}
