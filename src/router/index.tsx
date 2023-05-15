import { useRoutes } from 'react-router-dom'
import { AuthRoutes } from './Auth'

export default function Routes() {
    return useRoutes([AuthRoutes])
}