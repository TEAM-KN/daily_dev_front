import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Landing = lazy(() => import('../view/Landing'))
const Register = lazy(() => import('../view/Register'))
const Main = lazy(() => import('../view/Main'))

const MainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/main',
    element: <Main />,
  },
]

export default MainRoutes
