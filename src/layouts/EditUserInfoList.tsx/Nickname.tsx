import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userInfoState } from '../../recoil/userInfoState'
import EditButtons from './EditButtons'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { postUserInfo } from '../../service/apis'
import { useMutation } from 'react-query'

type TNickname = {
  nickname: string
}

export default function Nickname() {
  const userInfo = useRecoilValue(userInfoState)
  const [isEditing, setIsEditing] = useState(false)
  const setUserInfo = useSetRecoilState(userInfoState)

  const { mutate } = useMutation(postUserInfo, {
    onSuccess: (data) => {
      setUserInfo({
        ...userInfo,
        nickname: getValues('nickname'),
      })
    },
  })

  const {
    register,
    unregister,
    handleSubmit,
    setValue,
    setError,
    getValues,
    formState: { errors },
  } = useForm<TNickname>()

  useEffect(() => {
    setValue('nickname', userInfo.nickname)
  }, [userInfo.nickname])

  const onSubmit: SubmitHandler<TNickname> = (data) => {
    setIsEditing(false)
    if (data.nickname === userInfo.nickname) return
    mutate({
      email: userInfo.email,
      nickname: data.nickname,
    })
  }

  const cancle = () => {
    unregister('nickname')
    setIsEditing(false)
    setValue('nickname', userInfo.nickname)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-0 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
    >
      <dt className="text-md font-medium leading-6 text-gray-900">닉네임</dt>
      <dd className="sm:flex block justify-between mt-3 sm:mt-0 text-md leading-6 text-gray-700 sm:col-span-2">
        <div className="flex-1">
          <input
            {...register('nickname', {
              required: '닉네임을 입력해주세요',
            })}
            id="nickname"
            name="nickname"
            type="text"
            disabled={!isEditing}
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
          />
          {errors.nickname && (
            <p className="flex items-center mt-2 text-xs leading-5 text-pink-500">
              <ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />
              {errors.nickname.message}
            </p>
          )}
        </div>
        <div className="sm:w-32 text-right mt-4 sm:mt-0">
          <EditButtons
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            cancle={cancle}
          />
        </div>
      </dd>
    </form>
  )
}
