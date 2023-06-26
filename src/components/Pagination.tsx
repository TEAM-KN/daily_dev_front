import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

// 인덱스 버튼
type IndexButtonProps = {
  onClick: () => void
  indexNumber: number | string
  currentPageIndex: number
}
function IndexButton({
  onClick,
  indexNumber,
  currentPageIndex,
}: IndexButtonProps) {
  return (
    <>
      {indexNumber === currentPageIndex ? (
        <button
          type="button"
          aria-current="page"
          className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {indexNumber}
        </button>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          {indexNumber}
        </button>
      )}
    </>
  )
}

// 이전 버튼
type GoToPreviousButtonProps = {
  goToPreviousIndex: () => void
}
function GoToPreviousButton({ goToPreviousIndex }: GoToPreviousButtonProps) {
  return (
    <button
      type="button"
      onClick={goToPreviousIndex}
      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
    >
      <span className="sr-only">이전</span>
      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}

// 다음 버튼
type GoToNextButtonProps = {
  goToNextIndex: () => void
}
function GoToNextButton({ goToNextIndex }: GoToNextButtonProps) {
  return (
    <button
      onClick={goToNextIndex}
      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
    >
      <span className="sr-only">다음</span>
      <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}

// 페이지네이션 그룹
type PaginationProps = {
  goToPreviousIndex: () => void
  goToNextIndex: () => void
  pageIndexArray: number[]
  currentPageIndex: number
  setCurrentPageIndex: React.Dispatch<React.SetStateAction<number>>
}
export default function Pagination({
  goToPreviousIndex,
  goToNextIndex,
  pageIndexArray,
  currentPageIndex,
  setCurrentPageIndex,
}: PaginationProps) {
  return (
    <nav
      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
      aria-label="Pagination"
    >
      <GoToPreviousButton goToPreviousIndex={goToPreviousIndex} />
      {pageIndexArray.map((indexNumber: number) => (
        <IndexButton
          key={indexNumber}
          onClick={() => {
            setCurrentPageIndex(indexNumber)
          }}
          indexNumber={indexNumber}
          currentPageIndex={currentPageIndex}
        />
      ))}
      <GoToNextButton goToNextIndex={goToNextIndex} />
    </nav>
  )
}
