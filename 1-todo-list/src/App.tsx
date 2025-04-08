import { useMemo, useState } from 'react'

import MainSite from './components/MainSite'
import PageContext from './contexts/PageContext'

function App() {
  const initialState = {
    actualPage: [true, false, false],
    title: 'Tarefas'
  }
  const [page, setPage] = useState(initialState)

  return (
    <PageContext.Provider value={useMemo(() => ({ page, setPage }), [page])}>
      <MainSite />
    </PageContext.Provider>
  )
}

export default App
