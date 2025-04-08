import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Search from './pages/Search'
import GlobalStyles from './styles/Global'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Search />} path="/search" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
