import { useRecoilValue } from 'recoil'
import SiteLabel from '../components/labels/SiteLabel'
import { userInfoState } from '../recoil/userInfoState'
import { TSiteLabel } from '../types/commonTypes'

export default function SavedService() {
  const userInfo = useRecoilValue(userInfoState)

  return (
    <div className="flex flex-wrap gap-2">
      {userInfo.sites.length ? (
        userInfo.sites.map((site: TSiteLabel) => (
          <SiteLabel
            key={site.siteCode}
            siteName={site.siteName}
            siteCode={site.siteCode}
          />
        ))
      ) : (
        <p className="text-sm leading-7">구독 중인 서비스가 없어요 :(</p>
      )}
    </div>
  )
}
