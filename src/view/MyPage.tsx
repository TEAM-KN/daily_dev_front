import React, { useState } from 'react'
import Header from '../components/Header'
import {
  UserCircleIcon,
  PencilSquareIcon,
  PhotoIcon,
  XMarkIcon,
  CheckIcon,
} from '@heroicons/react/24/solid'
import { useLogout } from '../hooks/useLogout'
import { userInfoState } from '../recoil/userInfo'
import { useRecoilValue } from 'recoil'
import { useMutation } from 'react-query'
import { deleteUser } from '../service/apis'
import { useNavigate } from 'react-router-dom'
import EditService from '../layouts/EditService'
import SavedService from '../layouts/SavedService'

// Todo: 더미데이터 | 유저정보에서 가져오는 값으로 교체할 예정
const userSitesData = [
  {
    siteName: '네이버',
    siteCode: 'NAVER',
  },
  {
    siteName: '카카오',
    siteCode: 'KAKAO',
  },
]

export default function MyPage() {
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const userInfo = useRecoilValue(userInfoState)
  const { logout } = useLogout()

  const { mutate } = useMutation(deleteUser, {
    onSuccess: () => {
      localStorage.clear()
      navigate('/')
    },
  })

  return (
    <main className={`bg-white px-6 py-24 sm:py-32 lg:px-8`}>
      <Header />
      <div className="">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            마이페이지
          </h2>
          <section className="mx-auto mt-16 sm:mt-20 rounded-3xl ring-1 ring-gray-200 p-6 sm:p-10">
            <div className="flex items-center justify-between flex-wrap gap-y-4 gap-x-4">
              <div className="flex items-center">
                <UserCircleIcon
                  className="w-20 h-20 text-gray-300"
                  aria-hidden="true"
                />
                <div className="ml-2 sm:ml-4">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    {userInfo.nickname}
                  </h3>
                  <p className="text-base text-gray-700">{userInfo.email}</p>
                </div>
              </div>
              <div>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    type="button"
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 whitespace-nowrap"
                  >
                    <PencilSquareIcon
                      className="-ml-0.5 mr-1.5 h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                    구독 서비스 변경
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setIsEditing(false)}
                      type="button"
                      className="inline-flex items-center rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm whitespace-nowrap"
                    >
                      <XMarkIcon
                        className="mr-1.5 h-4 w-4 text-white"
                        aria-hidden="true"
                      />
                      구독 취소
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      type="button"
                      className="ml-2 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 whitespace-nowrap"
                    >
                      <CheckIcon
                        className="mr-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                      />
                      변경사항 저장
                    </button>
                  </>
                )}

                {/* <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 whitespace-nowrap"
                >
                  <PencilIcon
                    className="-ml-0.5 mr-1.5 h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                  비밀번호 변경
                </button> */}
              </div>
            </div>
            <div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="py-6 grid sm:grid-cols-3 gap-y-3">
                    <dt className="text-base font-medium leading-6 text-gray-900">
                      구독 중인 서비스
                    </dt>
                    <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {!isEditing ? (
                        <SavedService userSitesData={userSitesData} />
                      ) : (
                        <EditService />
                      )}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
          {!isEditing && (
            <section className="mt-20 m-auto text-center">
              <>
                <button
                  onClick={logout}
                  className="m-auto w-full sm:w-56 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  로그아웃
                </button>
                <button
                  onClick={() => mutate(userInfo.email)}
                  type="button"
                  className="mt-6 text-gray-500 hover:text-gray-600"
                >
                  회원탈퇴
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </>
            </section>
          )}
        </div>
      </div>
    </main>
  )
}
