import React, { createContext } from 'react'
import { SetTodos, Todo } from './TodosContext'

type ContextType = { setChecked: SetTodos; checked: Todo[] }

const CheckedContext = createContext<ContextType>({
  checked: [],
  setChecked: () => {}
})

export default CheckedContext
