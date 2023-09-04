import { useRef, useState } from 'react'
import { KeyIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState } from '../../recoil/useModalState'
import { useMutation } from 'react-query'
import { postUserCheck } from '../../apis/api'
import { userInfoState } from '../../recoil/userInfoState'

export default function PWConfirm({ Dialog, cancelButtonRef }: any) {
  const [modal, setModal] = useRecoilState(modalState)
  const [errorMsg, setErrorMsg] = useState('')
  const userInfo = useRecoilValue(userInfoState)
  const [password, setPassword] = useState<string>('')
  const { mutate } = useMutation(postUserCheck, {
    onSuccess: () => {
      modal.callback && modal.callback(password)
    },
    onError: () => {
      setErrorMsg('비밀번호가 일치하지 않습니다')
    },
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg('')
    setPassword(e.target.value)
  }
  const onSubmit = () => {
    mutate({
      email: userInfo.email,
      password: password,
    })
  }
  return (
    <>
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="mx-auto mb-5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:h-10 sm:w-10">
          <KeyIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0">
          <Dialog.Title
            as="h3"
            className="text-mg font-semibold leading-6 text-gray-900"
          >
            현재 비밀번호를 입력해주세요
          </Dialog.Title>
          <div className="mt-6">
            <input
              onChange={(e) => handleChange(e)}
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호"
              className="w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            />
            {errorMsg && (
              <p className="flex items-center mt-2 text-xs leading-5 text-pink-500">
                <ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />
                {errorMsg}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
          onClick={() => onSubmit()}
        >
          확인
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => setModal({ open: false })}
          ref={cancelButtonRef}
        >
          취소
        </button>
      </div>
    </>
  )
}
