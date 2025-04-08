import React, { useContext, useMemo, useReducer, useState } from 'react'

import CheckedContext from '../../contexts/CheckedContext'
import PageContext from '../../contexts/PageContext'
import SidebarContext from '../../contexts/SidebarContext'
import TodosContext, { Todo } from '../../contexts/TodosContext'
import GlobalStyle from '../../styles/Global'
import AddTask from '../AddTask'
import Header from '../Header'
import HeadPage from '../HeadPage'
import MainContent from '../MainContent'
import SideBar from '../SideBar'
import * as S from './styles'

function reducerTodos(todos: Todo[], action: { payload: Todo; type: string }) {
  switch (action.type) {
    case 'addTask':
      return [...todos, action.payload]
    case 'favoriteTask':
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, isImportant: !todo.isImportant }
        }
        return todo
      })
    case 'completeTask':
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, isChecked: !todo.isChecked }
        }
        return todo
      })
    case 'deleteTask':
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

function reducerChecked(
  checked: Todo[],
  action: { payload: Todo; type: string }
) {
  switch (action.type) {
    case 'check':
      return [...checked, action.payload]
    case 'favorite':
      return checked.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, isImportant: action.payload.isImportant }
        }
        return todo
      })
    case 'uncheck':
      return checked.filter(todo => todo.id !== action.payload.id)
    default:
      return checked
  }
}

function MainSite() {
  const [active, setActive] = useState(false)
  const [todos, dispatchTodos] = useReducer(reducerTodos, [])
  const [checked, dispatchChecked] = useReducer(reducerChecked, [])
  const { page } = useContext(PageContext)

  return (
    <S.ContentDiv>
      <GlobalStyle />
      <Header />
      <S.Flex>
        <TodosContext.Provider
          value={useMemo(() => ({ setTodos: dispatchTodos, todos }), [todos])}>
          <CheckedContext.Provider
            value={useMemo(
              () => ({ checked, setChecked: dispatchChecked }),
              [checked]
            )}>
            <SidebarContext.Provider
              value={useMemo(
                () => ({ setState: setActive, state: active }),
                [active]
              )}>
              <SideBar />
              <S.Section className={active ? 'active' : ''}>
                <S.BtnContent>
                  <HeadPage text={page.title} />
                  {page.actualPage[2] ? '' : <AddTask />}
                </S.BtnContent>
                <MainContent />
              </S.Section>
            </SidebarContext.Provider>
          </CheckedContext.Provider>
        </TodosContext.Provider>
      </S.Flex>
    </S.ContentDiv>
  )
}

export default MainSite
