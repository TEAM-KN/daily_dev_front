// react
import React, { Suspense } from 'react'

// routes
import { BrowserRouter } from 'react-router-dom'
import Routes from './router'
// reactQuery
import { QueryClient, QueryClientProvider } from 'react-query'
// recoil
import { RecoilRoot } from 'recoil'
// components
import Loading from './components/Loading'
import Modal from './components/Modal/Modal'
import Header from './layouts/Header'

const queryClient = new QueryClient()

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Header />
        <BrowserRouter basename="/">
          <Suspense fallback={<Loading />}>
            <Routes />
          </Suspense>
        </BrowserRouter>
        <Modal />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
