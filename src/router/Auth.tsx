import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Login = lazy(() => import('../view/authentication/login/Login'))
const RegisterComplete = lazy(() => import('../view/RegisterComplete'))

const AuthRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register/complete',
    element: <RegisterComplete />,
  },
]

export default AuthRoutes
