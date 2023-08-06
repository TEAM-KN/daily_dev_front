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
      className={`inline-block px-6 py-3 rounded-lg cursor-pointer whitespace-nowrap transition duration-200 ${hoverStyle}`}
    >
      {text}
    </button>
  )
}
