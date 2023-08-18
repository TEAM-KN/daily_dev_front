import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { userInfoState } from '../../recoil/userInfoState'
import EditButtons from './EditButtons'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { input, label } from '../../styles/style.input'

type TEmail = {
  email: string
}

export default function Email() {
  const userInfo = useRecoilValue(userInfoState)
  const [isEditing, setIsEditing] = useState(false)

  const {
    register,
    unregister,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TEmail>()

  useEffect(() => {
    setValue('email', userInfo.email)
  }, [userInfo.email])

  const onSubmit: SubmitHandler<TEmail> = (data) => {
    setIsEditing(false)
    if (data.email === userInfo.email) {
      return
    }
  }

  const cancle = () => {
    unregister('email')
    setIsEditing(false)
    setValue('email', userInfo.email)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-0 pb-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
    >
      <dt className={`${label}`}>이메일</dt>
      <dd className="sm:flex block justify-between mt-3 sm:mt-0 text-md leading-6 text-gray-700 sm:col-span-2">
        <div className="flex-1">
          <input
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                message: '유효한 이메일 주소를 입력해주세요',
              },
            })}
            id="email"
            name="email"
            type="email"
            disabled={!isEditing}
            className={`block w-full ${input}`}
          />
          {errors.email && (
            <p className="flex items-center mt-2 text-xs leading-5 text-pink-500">
              <ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="sm:w-32 text-right mt-4 sm:mt-0">
          {/* <EditButtons
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            cancle={cancle}
          /> */}
        </div>
      </dd>
    </form>
  )
}
