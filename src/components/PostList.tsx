import React from 'react'
import { NewspaperIcon } from '@heroicons/react/24/solid'

type PostListProps = {
  currentPosts: Content[]
}

type Content = {
  contentId: number
  link: string
  siteName: string
  siteCode: string
  author: string
  regDtm: string
  title: string
  description: string
}

function NoPostList() {
  return (
    <div className="text-center py-36">
      <NewspaperIcon className="inline w-10 text-gray-300" />
      <strong className="text-xl font-semibold block mt-3">
        아직 준비 중이에요
      </strong>
      <p className="text-sm text-gray-400 mt-1">조금만 기다려주세요!</p>
    </div>
  )
}

export default function PostList({ currentPosts }: PostListProps) {
  const color = (siteName: string) => {
    const colorMap: { [key: string]: string } = {
      NAVER: 'bg-green-50 text-green-700',
      KAKAO: 'bg-yellow-50 text-yellow-800',
      DAANGN: 'bg-orange-50 text-orange-600',
      WOO: 'bg-blue-50 text-blue-700',
    }

    return colorMap[siteName] || ''
  }

  return (
    <>
      {currentPosts.length < 1 && <NoPostList />}
      {currentPosts.map((content: Content) => (
        <li key={content.contentId} className="border-t first:border-0">
          <a
            href={content.link}
            target="_blank"
            className="block py-8 px-6 cursor-pointer hover:bg-gray-50 transition duration-200"
          >
            <div className="flex items-center">
              <strong
                className={`rounded-full px-3 py-1.5 font-medium ${color(
                  content.siteCode,
                )}`}
              >
                {content.siteName}
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
    </>
  )
}
