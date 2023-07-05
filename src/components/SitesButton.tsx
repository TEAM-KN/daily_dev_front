import React from 'react'

type SitesButtonProps = {
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
}: SitesButtonProps) {
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
              <button
                className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg active cursor-pointer whitespace-nowrap"
                aria-current="page"
              >
                {siteName}
              </button>
            ) : (
              <button
                onClick={() => changeSite(siteCode)}
                className="inline-block px-6 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer transition duration-200  whitespace-nowrap"
              >
                {siteName}
              </button>
            )}
          </li>
        ),
      )}
    </ul>
  )
}
