import { lazy, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TRouterItem } from '../types/commonTypes'

const RegisterComplete = lazy(() => import('../view/RegisterComplete'))
const MyPage = lazy(() => import('../view/MyPage'))
const EditUserInfo = lazy(() => import('../view/EditUserInfo'))

const AuthRoutesInfo: TRouterItem[] = [
  {
    path: '/register/complete',
    element: <RegisterComplete />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
  {
    path: '/mypage/edit',
    element: <EditUserInfo />,
  },
]

// 로그인 여부 확인
const WithLogin = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const isLoggedIn = localStorage.getItem('access-token')
  if (!isLoggedIn) {
    useEffect(() => {
      navigate('/login')
    })
    return null
  } else {
    return <>{children}</>
  }
}

const AuthRoutes = () => {
  return AuthRoutesInfo.map((routerInfo: TRouterItem) => {
    return {
      path: routerInfo.path,
      element: <WithLogin>{routerInfo.element}</WithLogin>,
    }
  })
}

export default AuthRoutes
