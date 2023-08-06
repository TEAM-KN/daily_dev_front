import React, { useEffect, useState } from 'react'
import { getContents, getSites } from '../service/apis'
import { useQuery } from 'react-query'
import SitesButton from './SiteTabList'
import PostItem from '../components/PostItem'
import MoreButton from '../components/buttons/MoreButton'
import Loading from '../components/Loading'

export default function PostList() {
  const postsPerPage: number = 15 // 한번에 보여줄 글 수
  const [allPosts, setAllPosts] = useState([]) // 조회한 글의 전체 목록
  const [currentPosts, setCurrentPosts] = useState([]) // 현재 보여질 글
  const [currentPageIndex, setCurrentPageIndex] = useState(1) //현재 페이지네이션 인덱스
  const [pageIndexArray, setPageIndexArray] = useState<number[]>([]) // 페이지네이션 인덱스
  const [currentSiteCode, setCurrentSiteCode] = useState('ALL') // 선택된 사이트 코드명

  // 전체 사이트 조회 API 호출
  const { data: sites, isLoading: sitesIsLoading } = useQuery(
    'sites',
    async () => {
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
    },
  )

  // 전체 콘텐츠 조회 API 호출
  const { data: contents, isLoading: contentsIsLoading } = useQuery(
    'contents',
    async () => {
      const data = await getContents()
      const result = data.reverse()
      return result
    },
    {
      onSuccess: (data) => {
        if (currentSiteCode === 'ALL') {
          setAllPosts(data)
        }
      },
    },
  )

  // 선택한 사이트 글만 필터링
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
    // 전체 글 중에 일부만 slice 해서 보여 줌
    const indexOfLastPost: number = currentPageIndex * postsPerPage
    setCurrentPosts(allPosts.slice(0, indexOfLastPost))

    setPageIndexArray(
      Array.from(
        { length: Math.ceil(allPosts.length / postsPerPage) },
        (_, index) => index + 1,
      ),
    )
  }, [allPosts, currentPageIndex, postsPerPage])

  return (
    <div className="mx-auto max-w-6xl">
      {sitesIsLoading || contentsIsLoading ? (
        <Loading />
      ) : (
        <>
          <section className="flex justify-between">
            <SitesButton
              sites={sites}
              currentSiteCode={currentSiteCode}
              setCurrentSiteCode={setCurrentSiteCode}
              filterPosts={filterPosts}
            />
          </section>
          <section className="sm:mt-12 mt-6 px-4 sm:px-0">
            {contents && (
              <ul>
                <PostItem currentPosts={currentPosts} />
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
          </section>
        </>
      )}
    </div>
  )
}
