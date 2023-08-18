import React from 'react'
import { TSiteLabel } from '../../types/commonTypes'

export default function SiteLabel({
  siteName,
  siteCode,
  margin = '',
}: TSiteLabel) {
  const color = (colorCode: string) => {
    const colorMap: { [key: string]: string } = {
      NAVER: 'bg-green-50 text-green-700',
      KAKAO: 'bg-yellow-50 text-yellow-800',
      DAANGN: 'bg-orange-50 text-orange-600',
      WOO: 'bg-blue-50 text-blue-700',
      LINE: 'bg-lime-50 text-lime-700',
      지마켓: 'bg-green-50 text-blue-700',
    }

    return colorMap[colorCode] || 'bg-gray-100 text-gray-700'
  }

  return (
    <strong
      className={`text-sm sm:text-base rounded-full px-3 py-1.5 font-medium ${margin} ${color(
        siteCode,
      )}`}
    >
      {siteName}
    </strong>
  )
}
