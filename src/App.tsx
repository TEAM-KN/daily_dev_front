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
          <div className="bg-blue-500 text-white p-4">
            Hello, Tailwind CSS!
          </div>
          <BrowserRouter basename="/">
              <Routes />
          </BrowserRouter>
        
        </div>
  )
}

export default App
