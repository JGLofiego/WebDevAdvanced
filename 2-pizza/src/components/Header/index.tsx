import React from 'react'

import * as S from './styles'

function Header({
  changeTheme,
  setChangeTheme
}: {
  changeTheme: boolean
  setChangeTheme: (newState: boolean) => void
}) {
  return (
    <S.Bg>
      <S.Div>
        <S.H1>
          <S.Pizza1>Pizza</S.Pizza1>
          <S.Pizza2>Pizza</S.Pizza2>
        </S.H1>
        <S.CheckboxDiv>
          <S.CheckboxTxt>Darkmode:</S.CheckboxTxt>
          <S.Checkbox
            type="checkbox"
            onChange={() => setChangeTheme(!changeTheme)}
          />
        </S.CheckboxDiv>
      </S.Div>
    </S.Bg>
  )
}

export default Header
