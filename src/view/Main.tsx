import React from 'react'
import Header from '../components/Header'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import * as Apis from '../service/apis'

export default function Main() {
  Apis.getContents().then((data) => {
    console.log(data)
  })

  return (
    <main className="px-6 py-24 sm:py-32 lg:px-8">
      <Header />
      <div className="mx-auto max-w-6xl">
        <section className=" flex justify-between">
          <ul className="flex flex-wrap text-md font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <button
                className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg active"
                aria-current="page"
              >
                전체
              </button>
            </li>
            <li className="mr-2">
              <button className="inline-block px-6 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                구글
              </button>
            </li>
            <li className="mr-2">
              <button className="inline-block px-6 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                네이버
              </button>
            </li>
            <li className="mr-2">
              <button className="inline-block px-6 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">
                카카오
              </button>
            </li>
          </ul>
          {/* <div>
            <input type="text" placeholder="검색" />
          </div> */}
        </section>
        <section className="mt-12">
          <ul>
            <li className="border-t first:border-0">
              <a href="#" className="block py-8 cursor-pointer">
                <div className="flex items-center">
                  <strong className="rounded-full bg-pink-50 px-3 py-1.5 font-medium text-pink-600">
                    네이버
                  </strong>
                  <span className="text-sm text-gray-400 ml-4">이데일리</span>
                  <span className="text-sm text-gray-400 before:content-['|'] before:mx-3 before:text-gray-200">
                    2023-06-23
                  </span>
                </div>
                <p className="mt-4 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 break-keep">
                  티빙, 국내 OTT 중 상반기 MAU 가장 많이 올랐다
                </p>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600 break-keep">
                  테슬라, 트위터, 스페이스X의 최고경영자(CEO)인 일론 머스크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커
                </p>
              </a>
            </li>
            <li className="border-t py-8 first:border-0">
              <a href="#" className="block cursor-pointer">
                <div className="flex items-center">
                  <strong className="rounded-full bg-pink-50 px-3 py-1.5 font-medium text-pink-600">
                    네이버
                  </strong>
                  <span className="text-sm text-gray-400 ml-4">이데일리</span>
                  <span className="text-sm text-gray-400 before:content-['|'] before:mx-3 before:text-gray-200">
                    2023-06-23
                  </span>
                </div>
                <p className="mt-4 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 break-keep">
                  티빙, 국내 OTT 중 상반기 MAU 가장 많이 올랐다
                </p>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600 break-keep">
                  테슬라, 트위터, 스페이스X의 최고경영자(CEO)인 일론 머스크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커크와
                  페이스북의 모회사 메타플랫폼(이하 메타)의 CEO 마크 저커
                </p>
              </a>
            </li>
          </ul>
        </section>
        <div className="flex justify-center mt-14">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </main>
  )
}
