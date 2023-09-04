import React from 'react'
import Header from '../layouts/Header'
import { UserCircleIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import { useLogout } from '../hooks/useLogout'
import { userInfoState } from '../recoil/userInfoState'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useMutation } from 'react-query'
import { deleteUser } from '../service/apis'
import { useNavigate } from 'react-router-dom'
import SavedService from '../layouts/SavedService'
import { modalState } from '../recoil/useModalState'

export default function MyPage() {
  const navigate = useNavigate()
  const userInfo = useRecoilValue(userInfoState)
  const { logout } = useLogout()
  const setModal = useSetRecoilState(modalState)

  // 탈퇴 API 호출
  const { mutate: mutateDeleteUser } = useMutation(deleteUser, {
    onSuccess: () => {
      setModal({ open: false })
      localStorage.clear()
      navigate('/')
    },
  })

  const Confirm = () => {
    setModal({
      open: true,
      type: 'alert',
      title: '정말 탈퇴하시겠어요?',
      cancleBtn: '아니요',
      confirmBtn: '네 탈퇴할래요',
      callback: () => {
        mutateDeleteUser(userInfo.email)
      },
    })
  }

  return (
    <main className={`relative bg-white px-6 py-24 sm:py-32 lg:px-8`}>
      <div className="">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            마이페이지
          </h2>
          <section className="mx-auto mt-10 sm:mt-20 rounded-3xl ring-1 ring-gray-200 p-6 sm:p-10">
            <div className="flex items-center justify-between flex-wrap gap-y-4 gap-x-4">
              <div className="flex items-center">
                <UserCircleIcon
                  className="w-16 h-16 sm:w-20 sm:h-20 text-gray-300"
                  aria-hidden="true"
                />
                <div className="ml-2 sm:ml-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                    {userInfo.nickname}
                  </h3>
                  <p className="text-base text-gray-700">{userInfo.email}</p>
                </div>
              </div>
              <div>
                <a
                  href="/mypage/edit"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 whitespace-nowrap"
                >
                  <PencilSquareIcon
                    className="-ml-0.5 mr-1.5 h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                  회원 정보 수정
                </a>
              </div>
            </div>
            <div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="py-6 grid sm:grid-cols-3">
                    <dt className="text-sm sm:text-base mb-3 font-semibold leading-6 text-gray-900">
                      구독 중인 서비스
                    </dt>
                    <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <SavedService />
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section className="mt-10 sm:mt-20 m-auto text-center">
            <button
              onClick={logout}
              className="m-auto w-full sm:w-56 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              로그아웃
            </button>
            <button
              onClick={() => Confirm()}
              className="mt-6 text-gray-500 hover:text-gray-600 text-base"
            >
              회원탈퇴
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </section>
        </div>
      </div>
    </main>
  )
}
