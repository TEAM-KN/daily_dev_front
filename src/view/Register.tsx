import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import {
  PhotoIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid'
import Header from '../components/Header'
import { useMutation, useQuery } from 'react-query'
import { getSites, getAuthIsCheck, postAuthJoin } from '../service/apis'
import Loading from '../components/Loading'
import { ConsoleSqlOutlined } from '@ant-design/icons'

type UserInfo = {
  email: string
  nickname: string
  password: string
  passwordConfirm: string
  imageUrl: null
  imageFile: null
  siteCodes: string[]
}

type sites = {
  siteCode: string
  siteName: string
  siteDesc: string
  createDate: string
  updateDate: string
}

export default function Register() {
  const navigate = useNavigate()
  const [checkedSites, setCheckedSite] = useState<string[]>([])
  const [isEmailChecked, setIsEmailChecked] = useState(false)
  const [validEmailMessage, setValidEmailMessage] = useState<string>('')

  const { data: sites, isLoading: sitesIsLoading } = useQuery('sites', getSites)

  const { isLoading: isCheckLoading, refetch: isCheckRefetch } = useQuery(
    ['isCheckEmail', ''],
    () => getAuthIsCheck(getValues('email')),
    {
      enabled: false,
      retry: false,
      onSuccess: () => {
        setIsEmailChecked(true)
        setValidEmailMessage('사용 가능한 이메일입니다')
      },
      onError: () => {
        setIsEmailChecked(false)
        setError('email', {
          type: 'manual',
          message: '이미 존재하는 이메일입니다',
        })
      },
    },
  )

  const { mutate, isLoading: postAuthJoinIsLoading } = useMutation(
    postAuthJoin,
    {
      onSuccess: (data, variables: any) => {
        localStorage.setItem('email', variables.email)
        localStorage.setItem('nickname', variables.nickname)
        navigate('complete')
      },
      onError: (error) => {
        console.log('회원가입 실패', error)
      },
    },
  )

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    trigger,
    formState: { errors },
  } = useForm<UserInfo>()

  const handleEmailCheck = async () => {
    const isValid = await trigger('email')
    setValidEmailMessage('')
    if (isValid) {
      isCheckRefetch({ queryKey: ['isCheckEmail', getValues('email')] })
    }
  }

  const onSubmit: SubmitHandler<UserInfo> = (data) => {
    if (!isEmailChecked) {
      setError('email', {
        type: 'manual',
        message: '이메일 중복 확인을 해주세요',
      })
      return
    }

    // if (checkedSites.length === 0) {
    //   setError('siteCodes', {
    //     type: 'manual',
    //     message: '서비스를 선택해주세요',
    //   })
    //   return
    // }

    const { passwordConfirm, ...withoutPasswordConfirm } = data
    const selectedSites = sites.filter((site: any) =>
      checkedSites.includes(site.siteCode),
    )
    const sitesCode = selectedSites.map((site: any) => site.siteCode)
    const formData = {
      ...withoutPasswordConfirm,
      imageUrl: null,
      imageFile: null,
      siteCodes: sitesCode,
    }
    mutate(formData, {
      onSuccess: (data) => {
        console.log(data)
      },
    })
  }

  return (
    <main
      className={`isolate bg-slate-50 px-6 py-24 sm:py-32 lg:px-8 min-h-screen`}
    >
      <Header />
      {sitesIsLoading || postAuthJoinIsLoading ? (
        <Loading />
      ) : (
        <>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              회원가입
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* <div className="sm:col-span-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                프로필 사진
              </label>
              <div className="mt-2 flex items-center flex-wrap max-[360px]:justify-center">
                <div className="mr-6 max-[360px]:mr-0 w-36 h-36 max-[360px]:w-48 max-[360px]:h-48 inline-flex border border-dashed border-gray-900/25 justify-center items-center rounded-full overflow-hidden">
                  <img
                    className="inline-block w-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <PhotoIcon className="w-9 text-gray-300" aria-hidden="true" />
                </div>
                <div className="max-[360px]:mt-5 max-[360px]:text-center">
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    파일 선택
                  </button>
                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div> */}

                <div className="sm:col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    이메일
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <input
                      {...register('email', {
                        required: '이메일을 입력해주세요',
                        pattern: {
                          value:
                            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                          message: '유효한 이메일 주소를 입력해주세요',
                        },
                        onChange: () => {
                          setValidEmailMessage('')
                          setIsEmailChecked(false)
                        },
                      })}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@example.com"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {isCheckLoading ? (
                      <button
                        type="button"
                        className="relative rounded-md bg-gray-50 px-2.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  whitespace-pre"
                        disabled
                      >
                        중복확인
                        <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                        </span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="rounded-md bg-white px-2.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 whitespace-pre"
                        onClick={handleEmailCheck}
                      >
                        중복확인
                      </button>
                    )}
                  </div>
                  {errors.email && (
                    <p className="flex items-center mt-2 text-xs leading-5 text-pink-500">
                      <ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                  {validEmailMessage !== '' && (
                    <p className="flex items-center mt-2 text-xs leading-5 text-indigo-500">
                      <CheckCircleIcon className="stroke-indigo-500 fill-none inline w-4 mr-1" />
                      {validEmailMessage}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-full">
                  <label
                    htmlFor="nickname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    닉네임
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <input
                      {...register('nickname', {
                        required: '닉네임을 입력해주세요',
                        maxLength: {
                          value: 10,
                          message: '10자 이내로 입력해주세요',
                        },
                      })}
                      id="nickname"
                      name="nickname"
                      type="text"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.nickname && (
                    <p className="flex items-center mt-2 text-xs leading-5 text-pink-500">
                      <ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />
                      {errors.nickname.message}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-full grid grid-cols-1 gap-x-3 gap-y-2 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      비밀번호
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('password', {
                          required: '비밀번호를 입력해주세요',
                          pattern: {
                            value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/i,
                            message:
                              '8자 이상의 영문, 숫자 조합으로 입력해주세요',
                          },
                        })}
                        type="password"
                        name="password"
                        id="password"
                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {errors.password && (
                      <p className="flex items-center mt-2 text-xs leading-5 text-pink-500">
                        <ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="passwordConfirm"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      비밀번호 확인
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('passwordConfirm', {
                          required: '확인용 비밀번호를 입력해주세요',
                          validate: {
                            matchesPreviousPassword: (value) => {
                              const { password } = getValues()
                              return (
                                password === value ||
                                '비밀번호가 일치하지 않습니다.'
                              )
                            },
                          },
                        })}
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    {errors.passwordConfirm &&
                      errors.passwordConfirm.message && (
                        <p className="flex items-center mt-2 text-xs leading-5 text-pink-500">
                          <ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />
                          {errors.passwordConfirm.message}
                        </p>
                      )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-semibold leading-7 text-gray-900">
                구독할 서비스를 선택해주세요!
              </h2>
            </div>
            {/* {errors.siteCodes && (
              <p className="flex items-center mt-2 text-xs leading-5 text-pink-500">
                <ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />
                {errors.siteCodes.message}
              </p>
            )} */}

            <ul className="mt-8 grid sm:grid-cols-3 xs:grid-cols-2 gap-x-4 gap-y-4">
              {sites &&
                sites.map((site: sites, index: number) => (
                  <li key={site.siteCode}>
                    <input
                      {...register('siteCodes')}
                      type="checkbox"
                      name="service-option"
                      id={`option-${index}`}
                      className="sr-only peer"
                      onChange={(e) => {
                        clearErrors('siteCodes')
                        const siteCode = sites[index].siteCode
                        if (e.target.checked) {
                          setCheckedSite((prevCheckedSite) => [
                            ...prevCheckedSite,
                            siteCode,
                          ])
                        } else {
                          setCheckedSite((prevCheckedSite) =>
                            prevCheckedSite.filter((id) => id !== siteCode),
                          )
                        }
                      }}
                    />
                    <label
                      htmlFor={`option-${index}`}
                      className="flex p-5 justify-between items-start cursor-pointer rounded-lg ring-1 ring-gray-300 peer-checked:ring-2 peer-checked:ring-indigo-500"
                    >
                      <div>
                        <div className="text-base font-semibold">
                          {site.siteName}
                        </div>
                      </div>
                      {checkedSites.includes(site.siteCode) ? (
                        <CheckCircleIcon className="w-5 fill-indigo-500" />
                      ) : (
                        <CheckCircleIcon className="w-5 fill-gray-300" />
                      )}
                    </label>
                  </li>
                ))}
            </ul>

            <div className="mt-20">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                가입하기
              </button>
            </div>
          </form>
        </>
      )}
    </main>
  )
}
