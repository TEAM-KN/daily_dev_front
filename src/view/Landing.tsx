import React from 'react'
import Header from '../components/Header'

export default function Landing() {
  return (
    <main className="bg-white h-screen overflow-hidden">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
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

        <section className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900">
              Daily Dev
            </h1>
            <p className="mt-6 text-md sm:text-lg text-gray-600 break-keep leading-7 sm:leading-8">
              끊임없이 발전하는 기술, Daily Dev와 함께 최신 트렌드를 따라가세요!{' '}
              <br className="hidden sm:block" />
              이곳은 유명 기업들의 기술 관련 글을 모아볼 수 있는 공간입니다.
            </p>
            <div className="inline-flex flex-wrap justify-center relative rounded-full px-4 py-1 mt-6 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              관심 있는 기업의 글을 구독하고 싶으신가요?
              <a
                href="/register"
                className="font-semibold text-indigo-600 inline-block ml-2"
              >
                <span className="absolute inset-0" aria-hidden="true"></span>
                회원가입<span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="mt-14 flex items-center justify-center gap-x-6">
              <a
                href="/main"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                시작하기
              </a>
            </div>
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
