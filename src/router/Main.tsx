import {RouteObject} from 'react-router-dom'
import {lazy} from 'react'

const Main = lazy(() => import('../view/Main'))

const MainRoutes: RouteObject = {
    path: '/',
    element: <Main />,
    children: [
        {
            path: '',
            element: <Main />
        }
    ]
}

export default MainRoutes