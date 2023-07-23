import React, { useEffect } from 'react'
import Header from '../components/Header'
import {
  UserCircleIcon,
  PencilIcon,
  PhotoIcon,
} from '@heroicons/react/24/solid'
import { useLogout } from '../hook/useLogout'
import { userInfoState } from '../recoil/userInfo'
import { useRecoilValue } from 'recoil'

export default function MyPage() {
  const userInfo = useRecoilValue(userInfoState)

  const { logout } = useLogout()

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
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 whitespace-nowrap"
                >
                  <PencilIcon
                    className="-ml-0.5 mr-1.5 h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                  프로필 수정
                </button>
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
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      구독 중인 서비스
                    </dt>
                    <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {/* <p>구독 중인 서비스가 없어요 :(</p> */}
                      <strong
                        className={`mr-2 text-sm sm:text-base rounded-full px-3 py-1.5 font-medium bg-green-50 text-green-700`}
                      >
                        네이버
                      </strong>
                      <strong
                        className={`text-sm sm:text-base rounded-full px-3 py-1.5 font-medium bg-yellow-50 text-yellow-700`}
                      >
                        카카오
                      </strong>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section className="mx-auto mt-16 sm:mt-20 rounded-3xl ring-1 ring-gray-200 p-6 sm:p-10">
            <form>
              <dl className="divide-y divide-gray-100">
                <div className="py-6 grid sm:grid-cols-3 gap-y-3">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    프로필 사진
                  </dt>
                  <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <div className="mt-2 flex items-center flex-wrap max-[360px]:justify-center">
                      <div className="mr-6 max-[360px]:mr-0 w-36 h-36 max-[360px]:w-48 max-[360px]:h-48 inline-flex border border-dashed border-gray-900/25 justify-center items-center rounded-full overflow-hidden">
                        {/* <img
                    className="inline-block w-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  /> */}
                        <PhotoIcon
                          className="w-9 text-gray-300"
                          aria-hidden="true"
                        />
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
                  </dd>
                </div>
                {/* <div className="py-6 grid sm:grid-cols-3 gap-y-3">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    이메일
                  </dt>
                  <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </dd>
                </div> */}
                <div className="py-6 grid sm:grid-cols-3 gap-y-3">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    닉네임
                  </dt>
                  <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      id="nickname"
                      name="nickname"
                      type="nickname"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </dd>
                </div>
                {/* <div className="py-6 grid sm:grid-cols-3 gap-y-3">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    현재 비밀번호
                  </dt>
                  <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      id="nickname"
                      name="nickname"
                      type="nickname"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </dd>
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    새 비밀번호
                  </dt>
                  <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      id="nickname"
                      name="nickname"
                      type="nickname"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </dd>
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    비밀번호 확인
                  </dt>
                  <dd className="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <input
                      id="nickname"
                      name="nickname"
                      type="nickname"
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </dd>
                </div> */}
              </dl>
            </form>
          </section>
          <section className="mt-20 m-auto text-center">
            <button
              onClick={logout}
              className="m-auto w-full sm:w-56 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              로그아웃
            </button>
            <button
              type="button"
              className="mt-6 text-gray-500 hover:text-gray-600"
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
