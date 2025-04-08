import { createContext } from 'react'

interface State {
  email: string
  setEmail: (value: string) => void
}

const EmailContext = createContext<State>({
  email: '',
  setEmail: () => {}
})

export default EmailContext
