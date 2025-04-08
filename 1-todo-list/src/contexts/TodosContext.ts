import React, { createContext } from 'react'

export interface Todo {
  id: string
  title: string
  isChecked: boolean
  isImportant: boolean
}

export type SetTodos = React.Dispatch<{ type: string; payload: Todo }>

type ContextType = { setTodos: SetTodos; todos: Todo[] }

const TodosContext = createContext<ContextType>({
  setTodos: () => {},
  todos: []
})

export default TodosContext
