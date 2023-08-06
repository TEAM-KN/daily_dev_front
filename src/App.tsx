// react
import React, { Suspense } from 'react'

// routes
import { BrowserRouter } from 'react-router-dom'
import Routes from './router'
// reactQuery
import { QueryClient, QueryClientProvider } from 'react-query'
// recoil
import { RecoilRoot } from 'recoil'
import Loading from './components/Loading'

const queryClient = new QueryClient()

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/">
          <Suspense fallback={<Loading />}>
            <Routes />
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
