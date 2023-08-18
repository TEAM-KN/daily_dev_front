import { useRef } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useRecoilState } from 'recoil'
import { modalState } from '../../recoil/useModalState'

export default function Confirm({ Dialog, cancelButtonRef }: any) {
  const [modal, setModal] = useRecoilState(modalState)

  return (
    <>
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="mx-auto mb-5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 sm:h-10 sm:w-10">
          <CheckIcon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0">
          <Dialog.Title
            as="h3"
            className="text-mg font-semibold leading-6 text-gray-900"
          >
            {modal.title}
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{modal.desc}</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 sm:px-8 sm:pb-6 sm:pt-2">
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm  hover:bg-indigo-700 sm:mt-0"
          onClick={() => setModal({ open: false })}
          ref={cancelButtonRef}
        >
          {modal.confirmBtn}
        </button>
      </div>
    </>
  )
}
