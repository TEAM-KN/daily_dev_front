import React from 'react'

type SitesButtonProps = {
  sites: []
  currentSiteCode: string
  setCurrentSiteCode: React.Dispatch<React.SetStateAction<string>>
}

export default function SitesButton({
  sites,
  currentSiteCode,
  setCurrentSiteCode,
}: SitesButtonProps) {
  return (
    <>
      {sites.map(
        ({ siteCode, siteName }: { siteCode: string; siteName: string }) => (
          <li className="mr-2" key={siteCode}>
            {currentSiteCode === siteCode ? (
              <button
                className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg active cursor-pointer"
                aria-current="page"
              >
                {siteName}
              </button>
            ) : (
              <button
                onClick={() => setCurrentSiteCode(siteCode)}
                className="inline-block px-6 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer"
              >
                {siteName}
              </button>
            )}
          </li>
        ),
      )}
    </>
  )
}
