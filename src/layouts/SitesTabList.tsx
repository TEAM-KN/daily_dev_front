import React from 'react'
import TabButton from '../components/buttons.jsx/TabButton'

type TSitesButton = {
  sites: []
  currentSiteCode: string
  setCurrentSiteCode: React.Dispatch<React.SetStateAction<string>>
  filterPosts: (selectedSiteCode: string) => void
}

export default function SitesButton({
  sites,
  currentSiteCode,
  setCurrentSiteCode,
  filterPosts,
}: TSitesButton) {
  const changeSite = (siteCode: string) => {
    setCurrentSiteCode(siteCode)
    filterPosts(siteCode)
  }

  return (
    <ul className="flex overflow-x-auto text-md font-medium text-center text-gray-500 dark:text-gray-400 px-4">
      {sites.map(
        ({ siteCode, siteName }: { siteCode: string; siteName: string }) => (
          <li className="mr-2 last:mr-0" key={siteCode}>
            {currentSiteCode === siteCode ? (
              <TabButton text={siteName} />
            ) : (
              <TabButton
                text={siteName}
                active={true}
                onClick={() => changeSite(siteCode)}
              />
            )}
          </li>
        ),
      )}
    </ul>
  )
}
