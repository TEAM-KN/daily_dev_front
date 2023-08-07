import SiteLabel from '../components/labels/SiteLabel'
import { TSiteLabel } from '../types/commonTypes'

// TODO: 타입 수정예정 (any)
export default function SavedService({ userSitesData }: any) {
  return (
    <>
      {/* TODO: 분기처리 확인하기 */}
      {userSitesData ? (
        userSitesData.map((site: TSiteLabel) => (
          <SiteLabel
            key={site.siteCode}
            siteName={site.siteName}
            siteCode={site.siteCode}
          />
        ))
      ) : (
        <p className="text-sm leading-7">구독 중인 서비스가 없어요 :(</p>
      )}
    </>
  )
}
