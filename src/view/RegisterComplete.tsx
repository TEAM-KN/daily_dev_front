import React from 'react'
import Header from '../components/Header'

export default function RegisterComplete() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Header />
      <div className="text-center py-32 sm:py-48 lg:py-50">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
          WELCOME!
        </h1>
        <p className="mt-6 text-md sm:text-lg text-gray-600 break-keep leading-7 sm:leading-8">
          {localStorage.getItem('nickname')}님, 데일리데브 회원가입을
          축하합니다.
          <br />
          선택하신 구독 서비스를{' '}
          <span className="text-indigo-600">
            {localStorage.getItem('email')}
          </span>
          로 보내드리겠습니다.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/main"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            시작하기
          </a>
          <a href="#" className="text-md font-semibold text-gray-900">
            구독 서비스 변경하기 <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  )
}
