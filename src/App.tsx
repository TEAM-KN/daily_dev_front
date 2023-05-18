// react
import React from 'react'

// css
// import './index.css'

// routes
import {BrowserRouter} from 'react-router-dom'
import Routes from './router'

function App() {
  return (
    <BrowserRouter basename="/daf">
        <Routes />
    </BrowserRouter>
  )
}

export default App
