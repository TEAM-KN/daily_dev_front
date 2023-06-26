import React from 'react'

type PostListProps = {
  currentPosts: Content[]
}

type Content = {
  contentId: number
  link: string
  site: string
  author: string
  regDtm: string
  title: string
  description: string
}

export default function PostList({ currentPosts }: PostListProps) {
  return (
    <>
      {currentPosts.map((content: Content) => (
        <li key={content.contentId} className="border-t first:border-0">
          <a
            href={content.link}
            target="_blank"
            className="block py-8 px-6 cursor-pointer hover:bg-gray-50 transition duration-300"
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
    </>
  )
}
