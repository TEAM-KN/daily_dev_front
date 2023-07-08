// react
import React from 'react'

// routes
import { BrowserRouter } from 'react-router-dom'
import Routes from './router'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
