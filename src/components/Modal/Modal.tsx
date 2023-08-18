import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useRecoilState } from 'recoil'
import { modalState } from '../../recoil/useModalState'
import Alert from './Alert'
import PWConfirm from './PWConfirm'
import Confirm from './Confirm'

export default function Modal() {
  const cancelButtonRef = useRef(null)
  const [modal, setModal] = useRecoilState(modalState)

  return (
    <Transition.Root show={modal.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={() => setModal({ open: false })}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-md">
                {modal.type === 'alert' && (
                  <Alert Dialog={Dialog} cancelButtonRef={cancelButtonRef} />
                )}
                {modal.type === 'confirm' && (
                  <Confirm Dialog={Dialog} cancelButtonRef={cancelButtonRef} />
                )}
                {modal.type === 'password' && (
                  <PWConfirm
                    Dialog={Dialog}
                    cancelButtonRef={cancelButtonRef}
                  />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
