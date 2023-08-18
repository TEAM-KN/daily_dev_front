import React from 'react'
import Header from '../layouts/Header'

export default function Landing() {
  return (
    <main className="relative bg-white h-screen overflow-hidden">
      <Header />
      <div className="relative isolate h-full px-6 pt-14 lg:px-8 flex justify-center items-center">
        <section className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900">
            Daily Dev
          </h1>
          <p className="mt-6 text-md sm:text-lg text-gray-600 break-keep leading-7 sm:leading-8">
            데일리데브는 유명 IT기업의 기술 블로그와 네이버 뉴스를 메일로
            전달하는 서비스입니다. <br className="hidden sm:block" />
            관심 있는 기업을 선택하고 매일 아침 10시에 최신 글을 메일로
            받아보세요.
          </p>
          {!localStorage.getItem('access-token') && (
            <div className="inline-flex flex-wrap justify-center relative rounded-full px-4 py-1 mt-6 text-sm leading-5 sm:leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              구독 서비스를 이용하고 싶으신가요?
              <a
                href="/register"
                className="font-semibold text-indigo-600 inline-block ml-2"
              >
                <span className="absolute inset-0" aria-hidden="true"></span>
                회원가입<span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          )}
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <div className="mt-16 flex items-center justify-center gap-x-6">
            <a
              href="/main"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              전체 컨텐츠 보기
            </a>
          </div>
        </section>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </main>
  )
}
