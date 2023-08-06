import React, { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useQuery } from 'react-query'
import { getSites } from '../service/apis'
import { TSites } from '../types/commonTypes'
import Loading from '../components/Loading'

export default function EditService() {
  const [checkedSites, setCheckedSite] = useState<string[]>([])
  const { data: sites, isLoading: sitesIsLoading } = useQuery('sites', getSites)

  return (
    <ul className="grid sm:grid-cols-3 xs:grid-cols-2 gap-x-4 gap-y-4">
      {sitesIsLoading && <Loading />}
      {sites &&
        sites.map((site: TSites, index: number) => (
          <li key={site.siteCode}>
            <input
              // {...register('siteCodes')}
              type="checkbox"
              name="service-option"
              id={`option-${index}`}
              className="sr-only peer"
              onChange={(e) => {
                // clearErrors('siteCodes')
                const siteCode = sites[index].siteCode
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
                <div className="text-base font-semibold">{site.siteName}</div>
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
