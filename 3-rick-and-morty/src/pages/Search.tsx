import React, { ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'

import ErrorComponent from '../components/ErrorComponent'
import Header from '../components/Header'
import Loading from '../components/Loading'

const Content = React.lazy(() => import('../components/Content'))

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return <ErrorComponent />
    }

    return children
  }
}

function Search() {
  const [searchParams] = useSearchParams()

  const [params] = searchParams.getAll('name')
  return (
    <div>
      <Header />
      <React.Suspense fallback={<Loading />}>
        <ErrorBoundary>
          <Content text={`?name=${params}`} />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  )
}

export default Search
