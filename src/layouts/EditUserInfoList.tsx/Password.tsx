import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userInfoState } from '../../recoil/userInfoState'
import { modalState } from '../../recoil/useModalState'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { useMutation } from 'react-query'
import { postUserPassword } from '../../service/apis'

type TPassword = {
  password: string
  passwordConfirm: string
}

export default function Password() {
  const userInfo = useRecoilValue(userInfoState)
  const setModal = useSetRecoilState(modalState)
  const [isEditing, setIsEditing] = useState(false)
  const [prevPassword, setPrevPassword] = useState('')

  // 패스워드 변경 API
  const { mutate } = useMutation(postUserPassword, {
    onSuccess: () => {
      cancle()
      setModal({
        open: true,
        type: 'confirm',
        title: '비밀번호가 변경되었어요',
        confirmBtn: '확인',
      })
    },
  })

  const {
    register,
    unregister,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<TPassword>()

  const onSubmit: SubmitHandler<TPassword> = ({ password }) => {
    mutate({
      email: userInfo.email,
      password: password,
    })
  }

  // 수정 취소
  const cancle = () => {
    unregister('password')
    unregister('passwordConfirm')
    setValue('password', '')
    setValue('passwordConfirm', '')
    setPrevPassword('')
    setIsEditing(false)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-0 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
    >
      <dt className="text-md font-medium leading-6 text-gray-900">비밀번호</dt>
      <dd className="sm:flex block justify-between items-start mt-3 sm:mt-0 text-md leading-6 text-gray-700 sm:col-span-2">
        <div className="flex-1">
          <ul>
            <li>
              <input
                {...register('password', {
                  required: '비밀번호를 입력해주세요',
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/i,
                    message: '8자 이상의 영문, 숫자 조합으로 입력해주세요',
                  },
                  validate: (value) => {
                    return (
                      value !== prevPassword ||
                      '이전 비밀번호와 다른 비밀번호를 입력해주세요'
                    )
                  },
                })}
                disabled={!isEditing}
                placeholder="새 비밀번호"
                id="password"
                name="password"
                type="password"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </li>
            {errors.password && (
              <p className="flex items-center mt-2 text-xs leading-5 text-pink-500">
                <ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />
                {errors.password.message}
              </p>
            )}
            <li className="mt-3">
              <input
                {...register('passwordConfirm', {
                  required: '확인용 비밀번호를 입력해주세요',
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password } = getValues()
                      return (
                        password === value || '비밀번호가 일치하지 않습니다'
                      )
                    },
                  },
                })}
                disabled={!isEditing}
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                placeholder="비밀번호 확인"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </li>
            {errors.passwordConfirm && errors.passwordConfirm.message && (
              <p className="flex items-center mt-2 text-xs leading-5 text-pink-500">
                <ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />
                {errors.passwordConfirm.message}
              </p>
            )}
          </ul>
        </div>
        <div className="sm:w-32 text-right mt-4 sm:mt-0">
          {!isEditing ? (
            <button
              onClick={() => {
                setModal({
                  open: true,
                  type: 'password',
                  callback: (prevPassword) => {
                    setModal({ open: false })
                    setIsEditing(true)
                    setPrevPassword(prevPassword)
                  },
                })
              }}
              type="button"
              className="mr-2 inline-flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              수정
            </button>
          ) : (
            <div>
              <button
                onClick={() => cancle()}
                type="button"
                className="mr-2 inline-flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                취소
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm  hover:bg-indigo-700 sm:mt-0 sm:w-auto"
              >
                저장
              </button>
            </div>
          )}
        </div>
      </dd>
    </form>
  )
}
