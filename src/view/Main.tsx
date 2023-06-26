import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import * as Apis from '../service/apis'
import { useQuery } from 'react-query'
import Loading from '../components/Loading'

type PaginationButtonProps = {
  onClick: () => void
  number: number | string
}

export default function Main() {
  const postsPerPage: number = 15 // 페이지당 보여줄 게시물 수
  const [viewContents, setViewContents] = useState([]) // 조회한 전체 콘텐츠 목록
  const [currentSiteCode, setCurrentSiteCode] = useState('ALL') // 현재 사이트 분류
  const [currentPage, setCurrentPage] = useState(1) //현재 페이지 번호
  const [pageLength, setPageLength] = useState(0)
  const [currentPosts, setCurrentPosts] = useState<number[]>([])
  const [pageLengthArray, setPageLengthArray] = useState<number[]>([])

  // 전체 사이트 조회
  const { data: sites } = useQuery('sites', async () => {
    const data = await Apis.getSites()
    const result = data.map(
      ({ siteCode, siteName }: { siteCode: string; siteName: string }) => ({
        siteName,
        siteCode,
      }),
    )
    result.unshift({
      siteName: '전체',
      siteCode: 'ALL',
    })
    return result
  })

  // 전체 콘텐츠 조회
  const { data: contents, isLoading: contentsIsLoading } = useQuery(
    'contents',
    async () => {
      const data = await Apis.getContents()
      const result = data.reverse()
      return result
    },
    {
      onSuccess: (data) => {
        setViewContents(data)
      },
    },
  )

  useEffect(() => {
    const indexOfLastPost: number = currentPage * postsPerPage
    const indexOfFirstPost: number = indexOfLastPost - postsPerPage
    setCurrentPosts(viewContents.slice(indexOfFirstPost, indexOfLastPost))

    const pageLength: number = Math.ceil(viewContents.length / postsPerPage)

    setPageLengthArray(
      Array.from({ length: pageLength }, (_, index) => index + 1),
    )
    setPageLength(pageLengthArray.length)
  }, [viewContents, currentPage, postsPerPage])

  // 이전버튼
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  // 다음 버튼
  const goToNextPage = () => {
    const totalPages = Math.ceil(viewContents.length / postsPerPage)
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  // 사이트 탭 버튼
  const SitesButton = () => {
    const onClick = (siteName: string) => {
      setCurrentSiteCode(siteName)
    }

    return (
      <>
        {sites.map(
          ({ siteCode, siteName }: { siteCode: string; siteName: string }) => (
            <li className="mr-2" key={siteCode}>
              {currentSiteCode === siteCode ? (
                <button
                  className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg active"
                  aria-current="page"
                >
                  {siteName}
                </button>
              ) : (
                <button
                  onClick={() => onClick(siteCode)}
                  className="inline-block px-6 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  {siteName}
                </button>
              )}
            </li>
          ),
        )}
      </>
    )
  }

  // 페이지네이션 버튼
  const PaginationButton = ({ onClick, number }: PaginationButtonProps) => {
    return (
      <>
        {number === currentPage ? (
          <button
            type="button"
            aria-current="page"
            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {number}
          </button>
        ) : (
          <button
            type="button"
            onClick={onClick}
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            {number}
          </button>
        )}
      </>
    )
  }

  return (
    <main className="px-6 py-24 sm:py-32 lg:px-8">
      <Header />
      {contentsIsLoading ? (
        <Loading />
      ) : (
        <div className="mx-auto max-w-6xl">
          <section className=" flex justify-between">
            <ul className="flex flex-wrap text-md font-medium text-center text-gray-500 dark:text-gray-400">
              <SitesButton />
            </ul>
          </section>
          <section className="mt-12">
            <ul>
              {contents &&
                currentPosts.map((content: any) => (
                  <li
                    key={content.contentId}
                    className="border-t py-8 first:border-0"
                  >
                    <a
                      href={content.link}
                      target="_blank"
                      className="block cursor-pointer"
                    >
                      <div className="flex items-center">
                        <strong className="rounded-full bg-pink-50 px-3 py-1.5 font-medium text-pink-600">
                          {content.site}
                        </strong>
                        <span className="text-sm text-gray-400 ml-4">
                          {content.author}
                        </span>
                        <span className="text-sm text-gray-400 before:content-['|'] before:mx-3 before:text-gray-200">
                          {content.regDtm}
                        </span>
                      </div>
                      <p className="mt-4 line-clamp-1 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 break-keep">
                        {content.title}
                      </p>
                      <p className="mt-3 line-clamp-1 text-sm leading-6 text-gray-600 break-keep">
                        {content.description}
                      </p>
                    </a>
                  </li>
                ))}
            </ul>
            {pageLength <= 1 && (
              <div className="flex justify-center mt-14">
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <button
                    onClick={goToPreviousPage}
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </button>

                  {pageLengthArray.map((number) => (
                    <PaginationButton
                      key={number}
                      onClick={() => {
                        setCurrentPage(number)
                      }}
                      number={number}
                    />
                  ))}
                  <button
                    onClick={goToNextPage}
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  )
}
