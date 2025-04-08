import React, { useContext } from 'react'

import menuBtn from '../../assets/menuBtn.svg'
import SidebarContext from '../../contexts/SidebarContext'
import * as S from './styles'

function HeadPage({ text }: { text: string }) {
  const { state, setState } = useContext(SidebarContext)

  return (
    <S.Div>
      <S.Btn className={state ? 'active' : ''} onClick={() => setState(!state)}>
        <img alt="Botão do Menu" src={menuBtn} />
      </S.Btn>
      <S.TextBtn className={state ? 'active' : ''}>{text}</S.TextBtn>
    </S.Div>
  )
}

export default HeadPage
