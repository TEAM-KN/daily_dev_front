import { useRoutes } from 'react-router-dom'
import MainRoutes from './Main'
import AuthRoutes from './Auth'

export default function Routes() {
  return useRoutes([...MainRoutes(), ...AuthRoutes()])
}
