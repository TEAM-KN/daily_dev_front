import React, { useEffect, useState } from 'react'
import Header from '../layouts/Header'
import {
  UserCircleIcon,
  PencilSquareIcon,
  ArrowUturnLeftIcon,
} from '@heroicons/react/24/solid'
import { useLogout } from '../hooks/useLogout'
import { userInfoState } from '../recoil/userInfo'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useMutation, useQuery } from 'react-query'
import {
  deleteUser,
  deleteUserSites,
  getSites,
  postUserSites,
} from '../service/apis'
import { useNavigate } from 'react-router-dom'
import EditService from '../layouts/EditService'
import SavedService from '../layouts/SavedService'
import { TSites } from '../types/commonTypes'

export default function MyPage() {
  const navigate = useNavigate()
  const [checkedSites, setCheckedSite] = useState<string[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const userInfo = useRecoilValue(userInfoState)
  const setUserInfo = useSetRecoilState(userInfoState)
  const { logout } = useLogout()

  // 사이트 조회 API 호출
  const { data: sitesData } = useQuery('sites', getSites)

  // 탈퇴 API 호출
  const { mutate: mutateDeleteUser } = useMutation(deleteUser, {
    onSuccess: () => {
      localStorage.clear()
      navigate('/')
    },
  })

  // 구독 정보 수정 API 호출
  const { mutate: mutatePostUserSites } = useMutation(postUserSites, {
    onSuccess: (data) => {
      setIsEditing(false)

      const userSitesData = sitesData.filter((item: TSites) =>
        checkedSites.includes(item.siteCode),
      )

      setUserInfo({
        ...userInfo,
        sites: userSitesData,
      })
    },
  })

  // 구독 정보 삭제 API 호출
  const { mutate: mutateDeleteUserSites } = useMutation(deleteUserSites, {
    onSuccess: () => {
      alert('구독이 취소가 완료됐어요')
      setIsEditing(false)
      setUserInfo({
        ...userInfo,
        sites: [],
      })
    },
  })

  // 서비스 : 기존에 선택한 값과 현재 선택한 값 비교
  const compareValue = () => {
    const prevChoice = userInfo.sites
      .map(({ siteCode }) => siteCode)
      .sort()
      .toString()
    const currentChoice = checkedSites.sort().toString()

    const result = prevChoice === currentChoice || checkedSites.length === 0

    return result
  }

  // 구독 서비스 변경사항 저장하기
  const saveSites = () => {
    mutatePostUserSites({ email: userInfo.email, siteCodes: checkedSites })
  }

  // 구독 취소하기
  const unsubscribe = () => {
    confirm('구독을 취소하면 메일 전송이 중단됩니다. 정말 취소하시겠어요?') &&
      mutateDeleteUserSites(userInfo.email)
  }

  useEffect(() => {
    setIsDisabled(compareValue())
  }, [checkedSites])

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
                    {userInfo.sites.length
                      ? '구독 서비스 변경'
                      : '구독 서비스 선택'}
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setIsEditing(false)}
                      type="button"
                      className="ml-2 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 whitespace-nowrap"
                    >
                      <ArrowUturnLeftIcon
                        className="mr-1.5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                      />
                      이전으로
                    </button>
                  </>
                )}
              </div>
            </div>
            <div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="py-6 grid sm:grid-cols-3 gap-y-3">
                    <dt className="text-md mb-2 font-semibold leading-6 text-gray-900">
                      {!isEditing ? '구독 중인 서비스' : '서비스 목록'}
                    </dt>
                    <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {!isEditing ? (
                        <SavedService />
                      ) : (
                        <EditService
                          sitesData={sitesData}
                          checkedSites={checkedSites}
                          setCheckedSite={setCheckedSite}
                        />
                      )}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-20 m-auto text-center">
            {!isEditing ? (
              <>
                <button
                  onClick={logout}
                  className="m-auto w-full sm:w-56 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-small font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  로그아웃
                </button>
                <button
                  onClick={() => {
                    confirm('정말 탈퇴하시겠어요?') &&
                      mutateDeleteUser(userInfo.email)
                  }}
                  className="mt-6 text-gray-500 hover:text-gray-600"
                >
                  회원탈퇴
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => saveSites()}
                  disabled={isDisabled}
                  className={`m-auto w-full sm:w-56 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-small font-medium text-white shadow-sm hover:bg-indigo-700 ${
                    isDisabled &&
                    `bg-gray-200 text-gray-600 transition duration-300 hover:bg-gray-200`
                  } `}
                >
                  저장하기
                </button>
                <button
                  onClick={() => unsubscribe()}
                  className="mt-6 text-gray-500 hover:text-gray-600"
                >
                  구독을 취소할래요
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}
