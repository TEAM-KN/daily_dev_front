import React, { useState, useEffect } from 'react'
import { ArrowSmallUpIcon } from '@heroicons/react/24/solid'

export default function ScrollTopButton() {
  const [hidden, setHidden] = useState(true)
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      if (document.documentElement.scrollTop < 500) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }

    window.addEventListener('scroll', handleScrollButtonVisibility)
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollTop}
      className={`fixed w-14 h-14 right-4 bottom-6 sm:right-8 sm:bottom-14 flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 rounded-full transition duration-300 ${
        hidden ? 'opacity-0 invisible' : 'opacity-1 visible'
      }`}
    >
      <ArrowSmallUpIcon className="text-white w-8" />
      <span className="sr-only" aria-hidden="true">
        맨 위로 스크롤 이동 버튼
      </span>
    </button>
  )
}
