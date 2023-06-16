import {useState} from 'react'
import Logo from '../assets/images/dd_logo.svg'
import { PhotoIcon, ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid'


interface Service {
  id: number;
  name: string;
}

const services: Service[] = [
  {
    id: 1,
    name: '카카오',
  },
  {
    id: 2,
    name: '네이버',
  },
  {
    id: 3,
    name: '배달의민족',
  },
  {
    id: 4,
    name: '토스',
  },
  {
    id: 5,
    name: '당근마켓',
  },
]

export default function Register() {
  const [checkedIdList, setCheckedIdList] = useState<number[]>([]);

  const changeHandler = (checked: boolean, id: number) => {
    if (checked) {
      setCheckedIdList([...checkedIdList, id]);
    } else {
      setCheckedIdList(checkedIdList.filter((el) => el !== id));
    }
  };




  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Daily Dev</span>
              <img
                className="h-8 w-auto"
                src={Logo}
                alt="Daily Dev"
              />
            </a>
          </div>
        </nav>
        
      </header>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">회원가입</h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
       

        <div className="border-b border-gray-900/10 pb-12">
          {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2> */}

          

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            

            <div className="sm:col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    프로필 사진
                  </label>
                <div className="mt-2 flex items-center flex-wrap max-[360px]:justify-center">
                  <div className="mr-6 max-[360px]:mr-0 w-36 h-36 max-[360px]:w-48 max-[360px]:h-48 inline-flex border border-dashed border-gray-900/25 justify-center items-center rounded-full overflow-hidden">
                    {/* <img
                      className="inline-block w-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    /> */}
                    <PhotoIcon className="w-9 text-gray-300" aria-hidden="true" />
                  </div>
                  <div className='max-[360px]:mt-5 max-[360px]:text-center'>
                      <button type="button" className="rounded-md bg-white px-2.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">파일 선택</button>
                      <p className="mt-2 text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
                
               
            </div>

            <div className="sm:col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                이메일
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='example@example.com'
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button type="button" className="rounded-md bg-white px-2.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 whitespace-pre">중복확인</button>
              </div>
              
            </div>

            <div className="sm:col-span-full">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                닉네임
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="10자 이내로 입력해주세요"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="flex items-center mt-2 text-xs leading-5 text-pink-500"><ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />공백을 제거해주세요</p>
            </div>


            <div className="sm:col-span-full grid grid-cols-1 gap-x-3 gap-y-2 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  비밀번호
                </label>
                <div className="mt-2">
                  <input
                    placeholder="8자 이내의 영문, 숫자 조합으로 입력해주세요"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
                  비밀번호 확인
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-full">
                <p className="flex items-center text-xs leading-5 text-pink-500"><ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />비밀번호가 일치하지 않습니다</p>
              </div>
              
            </div>
                  
          </div>
          
        </div>

        

        <div className="mt-12">
          <h2 className="text-xl font-semibold leading-7 text-gray-900">구독할 서비스를 선택해주세요!</h2>
        </div>

        <ul className="mt-8 grid sm:grid-cols-3 xs:grid-cols-2 gap-x-4 gap-y-4">
          {services.map((service, index) => (
            <li key={service.id}>
              <input type="checkbox" checked={checkedIdList.includes(service.id) ? true : false} onChange={(e) => changeHandler(e.currentTarget.checked, service.id)} name="service-option" id={`option-${index}`} className="sr-only peer" />
              <label htmlFor={`option-${index}`} className="flex p-5 cursor-pointer rounded-lg ring-1 ring-gray-300 peer-checked:ring-2 peer-checked:ring-indigo-500 peer-hover:bg-gray-50 justify-between items-start">
              <div>
                <div className="text-base font-semibold">{service.name}</div>
              </div>
              {checkedIdList.includes(service.id) ? <CheckCircleIcon className='w-5 fill-indigo-500'/> : <CheckCircleIcon className='w-5 fill-gray-300'/>}
              </label>
          </li>
          ))}
        </ul>
       

        <div className="mt-20">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            가입하기
          </button>
        </div>
      </form>
    </div>
  )
}
