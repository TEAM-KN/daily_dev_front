import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/dd_logo.svg'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useRecoilValue } from 'recoil'
import { isLoggedInState } from '../recoil/useLoginState'

export default function Header() {
  const isLoggedIn = useRecoilValue(isLoggedInState)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Daily Dev</span>
            <img className="h-8 w-auto" src={Logo} alt="Daily Dev" />
          </a>
        </div>
        {isLoggedIn ? (
          <a href="/mypage">
            <span className="sr-only">마이페이지</span>
            <UserCircleIcon className="w-11 text-gray-300" aria-hidden="true" />
          </a>
        ) : (
          <div>
            <a
              href="/login"
              className="text-md font-semibold leading-6 text-gray-900"
            >
              로그인 <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
