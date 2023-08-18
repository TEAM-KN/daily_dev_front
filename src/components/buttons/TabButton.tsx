import React from 'react'

type TTabButton = {
  text: string
  active?: boolean
  onClick?: () => void
}

export default function TabButton({
  text,
  active = false,
  onClick = () => {},
}: TTabButton) {
  const hoverStyle = active
    ? `hover:text-white hover:text-gray-900 hover:bg-gray-800 text-gray-400`
    : `bg-indigo-600 text-white`

  return (
    <button
      onClick={onClick}
      className={`text-sm sm:text-base inline-block px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg cursor-pointer whitespace-nowrap transition duration-200 ${hoverStyle}`}
    >
      {text}
    </button>
  )
}
