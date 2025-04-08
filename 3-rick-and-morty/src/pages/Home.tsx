import React from 'react'

import Content from '../components/Content'
import Header from '../components/Header'
import Loading from '../components/Loading'
import { ErrorBoundary } from './Search'

function Home() {
  return (
    <div>
      <Header />
      <React.Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Content text="" />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  )
}

export default Home
