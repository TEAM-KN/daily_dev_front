import React from 'react'
import Header from '../components/Header'
import { UserCircleIcon, PencilIcon } from '@heroicons/react/24/solid'

export default function MyPage() {
  return (
    <main className={`bg-white px-6 py-24 sm:py-32 lg:px-8`}>
      <Header />
      <div className="">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              마이페이지
            </h2>
          </div>
          <section className="mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <UserCircleIcon
                    className="w-20 h-20 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      {localStorage.getItem('nickname')}
                    </h3>
                    <p className="text-base text-gray-700">
                      {localStorage.getItem('email')}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <PencilIcon
                    className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  회원정보 수정
                </button>
              </div>

              <div>
                <div className="mt-6 border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        구독 중인 서비스
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
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
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">
                        구독 중인 서비스
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        구독 중인 서비스가 없어요 :(
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            {/* <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    구독 중인 서비스
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      2
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      개
                    </span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    구독 서비스 변경하기
                  </a>
                </div>
              </div>
            </div> */}
          </section>
          <section className="mt-20 m-auto text-center">
            <a
              href="#"
              className="m-auto w-full sm:w-56 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              로그아웃
            </a>
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
