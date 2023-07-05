import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getSites, getContents } from '../service/apis'
import { useQuery } from 'react-query'
import Loading from '../components/Loading'
// import Pagination from '../components/Pagination'
import SitesButton from '../components/SitesButton'
import PostList from '../components/PostList'
import ScrollTopButton from '../components/ScrollTopButton'
import MoreButton from '../components/MoreButton'

export default function Main() {
  const postsPerPage: number = 15 // 한번에 보여줄 글 수
  const [allPosts, setAllPosts] = useState([]) // 조회한 글의 전체 목록
  const [currentPosts, setCurrentPosts] = useState([]) // 현재 보여질 글
  const [currentPageIndex, setCurrentPageIndex] = useState(1) //현재 페이지네이션 인덱스
  const [pageIndexArray, setPageIndexArray] = useState<number[]>([]) // 페이지네이션 인덱스
  const [currentSiteCode, setCurrentSiteCode] = useState('ALL') // 선택된 사이트 코드명

  // 전체 사이트 조회
  const { data: sites } = useQuery('sites', async () => {
    const data = await getSites()
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
      const data = await getContents()
      const result = data.reverse()
      return result
    },
    {
      // staleTime: 10 * 60 * 1000, // 10분 동안 데이터를 캐시로부터 확인하고 API를 호출하지 않음
      onSuccess: (data) => {
        if (currentSiteCode === 'ALL') {
          setAllPosts(data)
        }
      },
    },
  )

  const filterPosts = (selectedSiteCode: string) => {
    const filterdPosts = contents.filter(
      ({ siteCode }: any) => selectedSiteCode === siteCode,
    )

    setCurrentPageIndex(1)
    if (selectedSiteCode === 'ALL') {
      setAllPosts(contents)
    } else {
      setAllPosts(filterdPosts)
    }
  }

  useEffect(() => {
    const indexOfLastPost: number = currentPageIndex * postsPerPage
    // const indexOfFirstPost: number = indexOfLastPost - postsPerPage

    // slice 첫번째 인자값
    // 더보기 사용할 경우 : 1
    // 페이지네이션 사용할 경우 : indexOfFirstPost
    setCurrentPosts(allPosts.slice(1, indexOfLastPost))

    setPageIndexArray(
      Array.from(
        { length: Math.ceil(allPosts.length / postsPerPage) },
        (_, index) => index + 1,
      ),
    )
  }, [allPosts, currentPageIndex, postsPerPage])

  return (
    <main className="px-6 py-24 sm:py-32 lg:px-8">
      <Header />
      {contentsIsLoading ? (
        <Loading />
      ) : (
        <div className="mx-auto max-w-6xl">
          <section className=" flex justify-between">
            <ul className="flex flex-wrap text-md font-medium text-center text-gray-500 dark:text-gray-400">
              <SitesButton
                sites={sites}
                currentSiteCode={currentSiteCode}
                setCurrentSiteCode={setCurrentSiteCode}
                filterPosts={filterPosts}
              />
            </ul>
          </section>
          <section className="mt-12">
            {contents && (
              <ul>
                <PostList currentPosts={currentPosts} />
              </ul>
            )}
            {pageIndexArray.length > 1 && (
              <div className="flex justify-center mt-12 sm:mt-20">
                <MoreButton
                  currentPageIndex={currentPageIndex}
                  pageIndexArray={pageIndexArray}
                  setCurrentPageIndex={setCurrentPageIndex}
                />
              </div>
            )}
            {/* {pageIndexArray.length > 1 && (
              <div className="flex justify-center mt-14">
                <Pagination
                  pageIndexArray={pageIndexArray}
                  currentPageIndex={currentPageIndex}
                  setCurrentPageIndex={setCurrentPageIndex}
                />
              </div>
            )} */}
          </section>
          <ScrollTopButton />
        </div>
      )}
    </main>
  )
}
