import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './view/authentication/login/Login'
import ThemeCustomization from './themes/'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return (
    <ThemeCustomization>
      <RouterProvider router={ router } />
    </ThemeCustomization>
  )
}

export default App
