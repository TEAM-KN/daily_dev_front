import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

type MoreButtonProps = {
  currentPageIndex: any
  pageIndexArray: any
  setCurrentPageIndex: any
}

export default function MoreButton({
  currentPageIndex,
  pageIndexArray,
  setCurrentPageIndex,
}: MoreButtonProps) {
  const viewMoreContent = () => {
    if (currentPageIndex < pageIndexArray.length) {
      setCurrentPageIndex((prevPage: any) => prevPage + 1)
    }
  }

  return (
    <button
      onClick={viewMoreContent}
      className="flex justify-center items-center rounded-full bg-white px-14 py-4 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      <span className="mr-2">더 보기</span>
      <ChevronDownIcon className="w-4" />
    </button>
  )
}
