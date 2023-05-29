// react
import React from 'react'

// routes
import {BrowserRouter} from 'react-router-dom'
import Routes from './router'



function App() {
  return (
        <div style={{
            background: 'linear-gradient(45deg, #2ea2e6, #ffffff)',
        }}>
          <BrowserRouter basename="/">
              <Routes />
          </BrowserRouter>
        
        </div>
  )
}

export default App
