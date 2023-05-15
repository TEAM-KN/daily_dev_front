import {RouteObject} from "react-router-dom";
import {lazy} from "react";

const Login = lazy(() => import('../view/authentication/login/Login'))

export const AuthRoutes: RouteObject = {
    path: '/',
    element: <></>,
    children: [
        {
            path: '',
            element: <Login />
        },
        {
            path: 'signin',
            element: <Login />
        }
    ]
}