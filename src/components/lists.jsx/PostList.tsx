import React from 'react'
import { NewspaperIcon } from '@heroicons/react/24/solid'
import SiteLabel from '../labels/SiteLabel'

type TPostList = {
  currentPosts: TContent[]
}

type TContent = {
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

export default function PostList({ currentPosts }: TPostList) {
  return (
    <>
      {currentPosts.length < 1 && <NoPostList />}
      {currentPosts.map((content: TContent) => (
        <li key={content.contentId} className="border-t first:border-0">
          <a
            href={content.link}
            target="_blank"
            className="block sm:py-8 sm:px-6 py-6 px-2 cursor-pointer hover:bg-gray-50 transition duration-200"
          >
            <div className="flex items-center">
              <SiteLabel
                siteName={content.siteName}
                siteCode={content.siteCode}
              />
              <span className="text-xs sm:text-sm text-gray-400 ml-4">
                {content.author}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 before:content-['|'] before:mx-3 before:text-gray-200">
                {content.regDtm}
              </span>
            </div>
            <p className="mt-2 sm:mt-4 line-clamp-1 text-xl sm:text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 break-keep">
              {content.title}
            </p>
            <p className="mt-1 sm:mt-3 line-clamp-1 text-xs sm:text-sm leading-6 text-gray-600 break-keep">
              {content.description}
            </p>
          </a>
        </li>
      ))}
    </>
  )
}
