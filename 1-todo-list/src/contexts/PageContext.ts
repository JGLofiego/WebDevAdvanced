import { createContext } from 'react'

interface Page {
  title: string
  actualPage: boolean[]
}

type Type = {
  setPage: (newState: Page) => void
  page: Page
}

const PageContext = createContext<Type>({
  setPage: () => {},
  page: { actualPage: [true, false, false], title: 'Tarefas' }
})

export default PageContext
