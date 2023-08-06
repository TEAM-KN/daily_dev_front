import { lazy } from 'react'

const Landing = lazy(() => import('../view/Landing'))
const Login = lazy(() => import('../view/Login'))
const Register = lazy(() => import('../view/Register'))
const Main = lazy(() => import('../view/Main'))

type RouterItem = {
  path: string
  element: React.ReactNode
}

const MainRoutesInfo: RouterItem[] = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
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

const MainRoutes = () => {
  return MainRoutesInfo.map((routerInfo: RouterItem) => {
    return {
      path: routerInfo.path,
      element: routerInfo.element,
    }
  })
}

export default MainRoutes
