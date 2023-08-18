import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userInfoState } from '../../recoil/userInfoState'
import { deleteUserSites, getSites, postUserSites } from '../../service/apis'
import { TSites } from '../../types/commonTypes'
import EditService from '../EditService'
import SavedService from '../SavedService'
import { ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { modalState } from '../../recoil/useModalState'

export default function Service() {
  const [errorMsg, setErrorMsg] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [checkedSites, setCheckedSite] = useState<string[]>([])
  const userInfo = useRecoilValue(userInfoState)
  const setUserInfo = useSetRecoilState(userInfoState)
  const setModal = useSetRecoilState(modalState)

  // 사이트 조회 API 호출
  const { data: sitesData } = useQuery('sites', getSites)

  // 구독 정보 수정 API 호출
  const { mutate: mutatePostUserSites } = useMutation(postUserSites, {
    onSuccess: (data) => {
      setIsEditing(false)

      const userSitesData = sitesData.filter((item: TSites) =>
        checkedSites.includes(item.siteCode),
      )

      setUserInfo({
        ...userInfo,
        sites: userSitesData,
      })
    },
  })

  // 서비스 : 기존에 선택한 값과 현재 선택한 값 비교
  const compareValue = () => {
    const prevChoice = userInfo.sites
      .map(({ siteCode }) => siteCode)
      .sort()
      .toString()
    const currentChoice = checkedSites.sort().toString()

    const result = prevChoice === currentChoice

    return result
  }

  // 구독 서비스 변경사항 저장하기
  const saveSites = () => {
    if (compareValue()) {
      setIsEditing(false)
      return
    }

    if (checkedSites.length <= 0) {
      return
    }

    mutatePostUserSites({ email: userInfo.email, siteCodes: checkedSites })
  }

  useEffect(() => {
    if (checkedSites.length <= 0) {
      setErrorMsg('한 개 이상의 서비스를 선택해 주세요')
    } else {
      setErrorMsg('')
    }
  }, [checkedSites])

  // 구독 정보 삭제 API 호출
  const { mutate: mutateDeleteUserSites } = useMutation(deleteUserSites, {
    onSuccess: () => {
      setModal({ open: false })
      setIsEditing(false)
      setUserInfo({
        ...userInfo,
        sites: [],
      })
    },
  })

  // 구독 취소하기
  const unsubscribe = () => {
    setModal({
      open: true,
      type: 'alert',
      title: '정말 구독을 취소하시겠어요?',
      desc: '구독을 취소하면 메일 전송이 중단됩니다.',
      cancleBtn: '아니요',
      confirmBtn: '네 취소할게요',
      callback: () => {
        mutateDeleteUserSites(userInfo.email)
      },
    })
  }

  return (
    <div className="px-0 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-md font-medium leading-6 text-gray-900">
        구독 서비스
        {isEditing && userInfo.sites.length > 0 && (
          <button
            onClick={() => {
              unsubscribe()
            }}
            className="py-3 text-sm text-red-600 hover:text-red-700 flex items-center"
          >
            <XCircleIcon className="w-4 mr-0.5" />
            구독을 취소할래요
          </button>
        )}
      </dt>
      <dd className="sm:flex block justify-between items-start mt-3 sm:mt-0 text-md leading-6 text-gray-700 sm:col-span-2">
        <div className="flex-1">
          {!isEditing ? (
            <SavedService />
          ) : (
            <>
              <EditService
                sitesData={sitesData}
                checkedSites={checkedSites}
                setCheckedSite={setCheckedSite}
              />
              {errorMsg && (
                <p className="flex items-center mt-4 text-xs leading-5 text-pink-500">
                  <ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />
                  {errorMsg}
                </p>
              )}
            </>
          )}
        </div>

        <div
          className={`sm:w-32 text-right sm:mt-0  ${
            isEditing ? 'mt-4' : 'mt-0.5'
          }`}
        >
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              type="button"
              className="mr-2 inline-flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              수정
            </button>
          ) : (
            <>
              <div>
                <button
                  onClick={() => setIsEditing(false)}
                  type="button"
                  className="mr-2 inline-flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  취소
                </button>
                <button
                  onClick={() => saveSites()}
                  className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm  hover:bg-indigo-700 sm:mt-0 sm:w-auto"
                >
                  저장
                </button>
              </div>
            </>
          )}
        </div>
      </dd>
    </div>
  )
}
