import React, { useEffect, useRef, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { TSites } from '../types/commonTypes'
import { useRecoilValue } from 'recoil'
import { userInfoState } from '../recoil/userInfo'

type TEditService = {
  sitesData: [TSites]
  checkedSites: string[]
  setCheckedSite: React.Dispatch<React.SetStateAction<string[]>>
}

export default function EditService({
  sitesData,
  checkedSites,
  setCheckedSite,
}: TEditService) {
  const { sites: userSites } = useRecoilValue(userInfoState)

  const newCheckedSites = userSites.map((item: TSites) => item.siteCode)

  useEffect(() => {
    setCheckedSite(newCheckedSites)
  }, [sitesData, userSites])

  return (
    <ul className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2  gap-x-4 gap-y-4">
      {sitesData &&
        sitesData.map((site: TSites, index: number) => (
          <li key={site.siteCode}>
            <input
              type="checkbox"
              name="service-option"
              id={`option-${index}`}
              className="sr-only peer"
              checked={checkedSites.includes(site.siteCode)}
              onChange={(e) => {
                const siteCode = sitesData[index].siteCode
                if (e.target.checked) {
                  setCheckedSite((prevCheckedSite) => [
                    ...prevCheckedSite,
                    siteCode,
                  ])
                } else {
                  setCheckedSite((prevCheckedSite) =>
                    prevCheckedSite.filter((id) => id !== siteCode),
                  )
                }
              }}
            />
            <label
              htmlFor={`option-${index}`}
              className="flex p-5 justify-between items-start cursor-pointer rounded-lg ring-1 ring-gray-300 peer-checked:ring-2 peer-checked:ring-indigo-500"
            >
              <div>
                <div className="text-md font-semibold break-words">
                  {site.siteName}
                </div>
              </div>
              {checkedSites.includes(site.siteCode) ? (
                <CheckCircleIcon className="w-5 fill-indigo-500" />
              ) : (
                <CheckCircleIcon className="w-5 fill-gray-300" />
              )}
            </label>
          </li>
        ))}
    </ul>
  )
}
