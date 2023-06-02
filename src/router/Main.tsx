import {RouteObject} from 'react-router-dom'
import {lazy} from 'react'

const Main = lazy(() => import('../view/Main'))
const Register = lazy(() => import('../view/Register'))

const MainRoutes: RouteObject = {
    path: '/',
    children: [
        {
            path: '',
            element: <Main />
        },
        {
            path: '/register',
            element: <Register />
        }
    ]
}

export default MainRoutes