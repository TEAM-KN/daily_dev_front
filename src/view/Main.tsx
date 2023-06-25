import React from 'react'
import Header from '../components/Header'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import * as Apis from '../service/apis'

export default function Main() {
  const data = [
    {
      contentId: 162,
      siteCode: null,
      title: '가장 강력한 ‘맥’ 제품…애플, 맥 스튜디오·맥 프로 공개',
      description:
        '사진=애플 애플은 5일(현지시간) 미국 캘리포니아주 쿠퍼티노 애플파크에서 열린 ‘세계 개발자 회의’(WWDC)에서 ‘맥 스튜디오 세계 개발자 회의’(WWDC)에서 ‘맥 스튜디오 세계 개발자 회의’(WWDC)에서 ‘맥 스튜디오 세계 개발자 회의’(WWDC)에서 ‘맥 스튜디오 세계 개발자 회의’(WWDC)에서 ‘맥 스튜디오 세계 개발자 회의’(WWDC)에서 ‘맥 스튜디오 세계 개발자 회의’(WWDC)에서 ‘맥 스튜디오 세계 개발자 회의’(WWDC)에서 ‘맥 스튜디오 세계 개발자 회의’(WWDC)에서 ‘맥 스튜디오 세계 개발자 회의’(WWDC)에서 ‘맥 스튜디오 ',
      link: 'https://n.news.naver.com/mnews/article/018/0005502153?sid=105',
      regDtm: '2023-06-07',
      author: '이데일리',
      site: '네이버',
    },
    {
      contentId: 163,
      siteCode: null,
      title: '카카오 빼고는 적자…모빌리티 버티기 통할까',
      description:
        '이른바 ‘타다 금지법’ 등 모빌리티 업계 혁신을 저해하는 각종 규제 및 시장경쟁 과열로 국내 모빌리티 사업자 대부분이 영업손실을 …',
      link: 'https://n.news.naver.com/mnews/article/011/0004198702?sid=105',
      regDtm: '2023-06-07',
      author: '서울경제',
      site: '구글',
    },
    {
      contentId: 164,
      siteCode: null,
      title: "'카카오톡 조용히 나가기', 3주간 200만명 사용",
      description:
        "카카오톡(카톡)이 선보인 '단체방 조용히 나가기' 기능을 이용한 사용자가 3주간 200만명이 넘은 것으로 나타났다. 6일 카카오 …",
      link: 'https://n.news.naver.com/mnews/article/031/0000750405?sid=105',
      regDtm: '2023-06-07',
      author: '아이뉴스24',
      site: '카카오',
    },
  ]

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
            {data.map((item) => (
              <li key={item.contentId} className="border-t py-8 first:border-0">
                <a
                  href={item.link}
                  target="_blank"
                  className="block cursor-pointer"
                >
                  <div className="flex items-center">
                    <strong className="rounded-full bg-pink-50 px-3 py-1.5 font-medium text-pink-600">
                      {item.site}
                    </strong>
                    <span className="text-sm text-gray-400 ml-4">
                      {item.author}
                    </span>
                    <span className="text-sm text-gray-400 before:content-['|'] before:mx-3 before:text-gray-200">
                      {item.regDtm}
                    </span>
                  </div>
                  <p className="mt-4 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 break-keep">
                    {item.title}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600 break-keep">
                    {item.description}
                  </p>
                </a>
              </li>
            ))}
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
