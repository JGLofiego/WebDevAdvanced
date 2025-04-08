import { nanoid } from 'nanoid'
import React, { useContext, useState } from 'react'

import addBtn from '../../assets/addBtnImg.svg'
import CheckedContext from '../../contexts/CheckedContext'
import PageContext from '../../contexts/PageContext'
import TodosContext from '../../contexts/TodosContext'
import * as S from './styles'

type SetState = (newState: boolean) => void

function AddtaskInput({ setState }: { setState: SetState }) {
  const { setTodos } = useContext(TodosContext)
  const { page } = useContext(PageContext)
  const { setChecked } = useContext(CheckedContext)
  const [name, setName] = useState('')
  const [completed, setCompleted] = useState(false)

  return (
    <S.DivInput
      onSubmit={e => {
        e.preventDefault()
        if (completed) {
          setChecked({
            payload: {
              id: nanoid(),
              isChecked: completed,
              isImportant: page.actualPage[1],
              title: name
            },
            type: 'check'
          })
        } else {
          setTodos({
            payload: {
              id: nanoid(),
              isChecked: completed,
              isImportant: page.actualPage[1],
              title: name
            },
            type: 'addTask'
          })
        }

        setState(false)
      }}>
      <S.TextDivIn>
        <S.CheckBox
          type="checkbox"
          onChange={e => setCompleted(e.target.checked)}
        />
        <S.TextIn
          autoFocus
          required
          maxLength={50}
          placeholder="Adicionar uma tarefa"
          type="text"
          onChange={e => setName(e.target.value)}
        />
      </S.TextDivIn>
      <S.BtnDiv>
        <S.addBtn>Adicionar</S.addBtn>
        <S.cancelBtn type="button" onClick={() => setState(false)}>
          Cancelar
        </S.cancelBtn>
      </S.BtnDiv>
    </S.DivInput>
  )
}

function AddTaskBtn({ setState }: { setState: SetState }) {
  return (
    <S.Button
      onClick={() => {
        setState(true)
      }}>
      <img alt="Botão de adicionar tarefa" src={addBtn} />
      <S.BtnTxt>Adicionar tarefa</S.BtnTxt>
    </S.Button>
  )
}

function AddTask() {
  const [inputActive, setInputActive] = useState(false)

  return (
    <S.Div>
      {inputActive ? (
        <AddtaskInput setState={setInputActive} />
      ) : (
        <AddTaskBtn setState={setInputActive} />
      )}
    </S.Div>
  )
}

export default AddTask
