export default function SavedService() {
  return (
    <>
      {/* <p>구독 중인 서비스가 없어요 :(</p> */}
      <strong
        className={`mr-2 text-sm sm:text-base rounded-full px-3 py-1.5 font-medium bg-green-50 text-green-700`}
      >
        네이버
      </strong>
      <strong
        className={`text-sm sm:text-base rounded-full px-3 py-1.5 font-medium bg-yellow-50 text-yellow-700`}
      >
        카카오
      </strong>
    </>
  )
}
