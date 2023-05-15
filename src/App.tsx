// react
import React, { lazy } from 'react'

// css
import './index.css'

// routes
import { createBrowserRouter, BrowserRouter } from 'react-router-dom'
import Routes from './router'

const Login = lazy(() => import('./view/authentication/login/Login'))

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return (
      <>
        <BrowserRouter>
            <Routes  />
        </BrowserRouter>
      </>
  )
}

export default App
