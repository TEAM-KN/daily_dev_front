// react
import React from 'react'


// routes
import {BrowserRouter} from 'react-router-dom'
import Routes from './router'

function App() {
  return (
    <BrowserRouter basename="/dailyf">
        <Routes />
    </BrowserRouter>
  )
}

export default App
