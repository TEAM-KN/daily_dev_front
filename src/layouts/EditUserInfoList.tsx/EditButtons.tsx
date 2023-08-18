import React from 'react'

type TEditButtonsProps = {
  isEditing: boolean
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
  cancle: () => void
}

export default function EditButtons({
  isEditing,
  setIsEditing,
  cancle,
}: TEditButtonsProps) {
  return (
    <>
      {!isEditing ? (
        <button
          onClick={() => setIsEditing(true)}
          type="button"
          className="mr-2 inline-flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          수정
        </button>
      ) : (
        <div>
          <button
            onClick={() => {
              cancle()
            }}
            type="button"
            className="mr-2 inline-flex justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            취소
          </button>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm  hover:bg-indigo-700 sm:mt-0 sm:w-auto"
          >
            저장
          </button>
        </div>
      )}
    </>
  )
}
