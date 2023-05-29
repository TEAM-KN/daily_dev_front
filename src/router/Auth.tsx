import {RouteObject} from 'react-router-dom'
import {lazy} from 'react'

const Login = lazy(() => import('../view/authentication/login/Login'))

const AuthRoutes: RouteObject = {
    path: '/',
    element: <Login />,
    children: [
        {
            path: '/login',
            element: <Login />
        }
    ]
}

export default AuthRoutes