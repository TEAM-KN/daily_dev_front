import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Login = lazy(() => import('../view/authentication/login/Login'))
const MyPage = lazy(() => import('../view/MyPage'))
const RegisterComplete = lazy(() => import('../view/RegisterComplete'))

const AuthRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
  {
    path: '/register/complete',
    element: <RegisterComplete />,
  },
]

export default AuthRoutes
