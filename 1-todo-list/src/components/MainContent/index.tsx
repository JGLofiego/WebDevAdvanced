import React, { useContext } from 'react'

import deleteBtn from '../../assets/deleteBtn.svg'
import CheckedContext from '../../contexts/CheckedContext'
import PageContext from '../../contexts/PageContext'
import TodosContext, { Todo } from '../../contexts/TodosContext'
import { CheckBox } from '../AddTask/styles'
import * as S from './styles'

function TodosComponent({
  todos,
  isCheckedPg
}: {
  isCheckedPg: boolean
  todos: Todo[]
}) {
  const { setTodos } = useContext(TodosContext)
  const { setChecked } = useContext(CheckedContext)
  return (
    <>
      {todos.map(todo => (
        <S.TaksDiv key={todo.id}>
          <S.CheckboxTxt>
            <CheckBox
              defaultChecked={todo.isChecked}
              type="checkbox"
              onChange={e => {
                if (e.target.checked) {
                  setTodos({
                    payload: {
                      id: todo.id,
                      isChecked: e.target.checked,
                      isImportant: todo.isImportant,
                      title: todo.title
                    },
                    type: 'deleteTask'
                  })
                  setChecked({
                    payload: {
                      id: todo.id,
                      isChecked: e.target.checked,
                      isImportant: todo.isImportant,
                      title: todo.title
                    },
                    type: 'check'
                  })
                } else {
                  setTodos({
                    payload: {
                      id: todo.id,
                      isChecked: e.target.checked,
                      isImportant: todo.isImportant,
                      title: todo.title
                    },
                    type: 'addTask'
                  })
                  setChecked({
                    payload: {
                      id: todo.id,
                      isChecked: e.target.checked,
                      isImportant: todo.isImportant,
                      title: todo.title
                    },
                    type: 'uncheck'
                  })
                }
              }}
            />
            <S.TasksTxt>{todo.title}</S.TasksTxt>
          </S.CheckboxTxt>
          <S.BtnDiv>
            <S.ImportantCheckbox
              defaultChecked={todo.isImportant}
              type="checkbox"
              onChange={e => {
                if (!isCheckedPg) {
                  setTodos({
                    payload: {
                      id: todo.id,
                      isChecked: todo.isChecked,
                      isImportant: e.target.checked,
                      title: todo.title
                    },
                    type: 'favoriteTask'
                  })
                } else {
                  setChecked({
                    payload: {
                      id: todo.id,
                      isChecked: todo.isChecked,
                      isImportant: e.target.checked,
                      title: todo.title
                    },
                    type: 'favorite'
                  })
                }
              }}
            />
            <S.DeleteBtn
              onClick={() => {
                if (!isCheckedPg) {
                  setTodos({
                    payload: {
                      id: todo.id,
                      isChecked: todo.isChecked,
                      isImportant: todo.isImportant,
                      title: todo.title
                    },
                    type: 'deleteTask'
                  })
                } else {
                  setChecked({
                    payload: {
                      id: todo.id,
                      isChecked: todo.isChecked,
                      isImportant: todo.isImportant,
                      title: todo.title
                    },
                    type: 'uncheck'
                  })
                }
              }}>
              <img alt="Botão de apagar tarefa" src={deleteBtn} />
            </S.DeleteBtn>
          </S.BtnDiv>
        </S.TaksDiv>
      ))}
    </>
  )
}

function MainContent() {
  const { todos } = useContext(TodosContext)
  const { page } = useContext(PageContext)
  const { checked } = useContext(CheckedContext)
  return (
    <S.Grid>
      {page.actualPage[0] ? (
        <TodosComponent isCheckedPg={false} todos={todos} />
      ) : (
        ''
      )}
      {page.actualPage[1] ? (
        <TodosComponent
          isCheckedPg={false}
          todos={todos.filter(todo => todo.isImportant)}
        />
      ) : (
        ''
      )}
      {page.actualPage[2] ? <TodosComponent isCheckedPg todos={checked} /> : ''}
    </S.Grid>
  )
}

export default MainContent
