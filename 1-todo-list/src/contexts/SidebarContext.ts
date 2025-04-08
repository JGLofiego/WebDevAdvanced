import React, { createContext } from 'react'

type Type = {
  setState: (newState: boolean) => void
  state: boolean
}

const SidebarContext = createContext<Type>({
  setState: () => {},
  state: false
})

export default SidebarContext
