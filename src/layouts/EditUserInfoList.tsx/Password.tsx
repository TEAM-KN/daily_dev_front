import React from 'react'

export default function Password() {
  return (
    <div className="px-0 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-md font-medium leading-6 text-gray-900">비밀번호</dt>
      <dd className="sm:flex block justify-between items-start mt-3 sm:mt-0 text-md leading-6 text-gray-700 sm:col-span-2">
        <div className="flex-1">
          <ul>
            <li>
              <input
                disabled
                placeholder="새 비밀번호"
                id="new-password"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                type="text"
              />
            </li>
            <li className="mt-3">
              <input
                disabled
                id="confirm-password"
                placeholder="비밀번호 확인"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                type="text"
              />
            </li>
          </ul>
        </div>
        <div className="sm:w-32 text-right mt-4 sm:mt-0">
          <button
            type="button"
            className="mr-2 inline-flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            수정
          </button>
        </div>
      </dd>
    </div>
  )
}
