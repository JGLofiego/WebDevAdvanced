import React, { useContext } from 'react'

import checkIconT from '../../assets/checkedIconActive.svg'
import checkIcon from '../../assets/checkIcon.svg'
import importantIcon from '../../assets/importantIcon.svg'
import importantIconT from '../../assets/importantIconActive.svg'
import taskIcon from '../../assets/taskIcon.svg'
import taskIconT from '../../assets/taskIconActive.svg'
import CheckedContext from '../../contexts/CheckedContext'
import PageContext from '../../contexts/PageContext'
import SidebarContext from '../../contexts/SidebarContext'
import TodosContext from '../../contexts/TodosContext'
import * as S from './styles'

function Counter({
  active,
  content: number
}: {
  active: boolean
  content: number
}) {
  return <S.Counter className={active ? 'active' : ''}>{number}</S.Counter>
}

function Modal({ active: state }: { active: boolean }) {
  const { page, setPage } = useContext(PageContext)
  const { todos } = useContext(TodosContext)
  const { checked } = useContext(CheckedContext)

  return (
    <S.Modal className={state ? 'active' : ''}>
      <S.LinksContainer>
        <S.Link
          onClick={() =>
            setPage({
              actualPage: [true, false, false],
              title: 'Tarefas'
            })
          }>
          <S.ImgTxt>
            <img
              alt="Ícone de ínicio"
              src={page.actualPage[0] ? taskIconT : taskIcon}
            />
            <S.LinkText className={page.actualPage[0] ? 'active' : ''}>
              Tarefas
            </S.LinkText>
          </S.ImgTxt>
          {todos.length === 0 ? (
            ''
          ) : (
            <Counter active={page.actualPage[0]} content={todos.length} />
          )}
        </S.Link>
        <S.Link
          onClick={() =>
            setPage({
              actualPage: [false, true, false],
              title: 'Importantes'
            })
          }>
          <S.ImgTxt>
            <img
              alt="Ícone de importantes"
              src={page.actualPage[1] ? importantIconT : importantIcon}
            />
            <S.LinkText className={page.actualPage[1] ? 'active' : ''}>
              Importantes
            </S.LinkText>
          </S.ImgTxt>
          {todos.filter(todo => todo.isImportant).length === 0 ? (
            ''
          ) : (
            <Counter
              active={page.actualPage[1]}
              content={todos.filter(todo => todo.isImportant).length}
            />
          )}
        </S.Link>
        <S.Link
          onClick={() =>
            setPage({
              actualPage: [false, false, true],
              title: 'Concluídos'
            })
          }>
          <S.ImgTxt>
            <img
              alt="Ícone de concluídos"
              src={page.actualPage[2] ? checkIconT : checkIcon}
            />
            <S.LinkText className={page.actualPage[2] ? 'active' : ''}>
              Concluídos
            </S.LinkText>
          </S.ImgTxt>
          {checked.length === 0 ? (
            ''
          ) : (
            <Counter active={page.actualPage[2]} content={checked.length} />
          )}
        </S.Link>
      </S.LinksContainer>
    </S.Modal>
  )
}

function SideBar() {
  const { state } = useContext(SidebarContext)
  return (
    <S.ModalBg className={state ? 'active' : ''}>
      <Modal active={state} />
    </S.ModalBg>
  )
}

export default SideBar
