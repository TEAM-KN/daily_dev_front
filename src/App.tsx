// react
import React from 'react'

// routes
import { BrowserRouter } from 'react-router-dom'
import Routes from './router'

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes />
    </BrowserRouter>
  )
}

export default App
