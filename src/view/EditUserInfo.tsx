import React, { useState } from 'react'
import Email from '../layouts/EditUserInfoList.tsx/Email'
import Nickname from '../layouts/EditUserInfoList.tsx/Nickname'
import Password from '../layouts/EditUserInfoList.tsx/Password'
import Service from '../layouts/EditUserInfoList.tsx/Service'
import Header from '../layouts/Header'

export default function EditUserInfo() {
  return (
    <main className={`relative bg-white px-6 py-24 sm:py-32 lg:px-8`}>
      <Header />
      <div className="">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            회원 정보 수정
          </h2>
          <section className="mt-10 sm:mt-20">
            <dl className="divide-y divide-gray-100">
              <Email />
              <Nickname />
              <Service />
              <Password />
            </dl>
          </section>
          <section className="mt-12 sm:mt-20">
            <a
              href="/mypage"
              className="m-auto w-full sm:w-56 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              완료
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}
