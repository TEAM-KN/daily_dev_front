// react
import React from 'react'

// routes
import { BrowserRouter } from 'react-router-dom'
import Routes from './router'
// reactQuery
import { QueryClient, QueryClientProvider } from 'react-query'
// recoil
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/">
          <Routes />
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
