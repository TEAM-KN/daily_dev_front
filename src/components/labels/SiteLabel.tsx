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
    }

    return colorMap[colorCode] || ''
  }

  return (
    <strong
      className={`mr-2 &:first-of-type:mr-0 text-sm sm:text-base rounded-full px-3 py-1.5 font-medium ${margin} ${color(
        siteCode,
      )}`}
    >
      {siteName}
    </strong>
  )
}
