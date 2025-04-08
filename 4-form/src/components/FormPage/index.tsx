import React from 'react'

import logo from '../../assets/logo.svg'
import * as S from './styles'

function FormPage({ children }: { children: JSX.Element }) {
  return (
    <S.Bg>
      <S.Content>
        <S.LogoTitle>
          <img alt="Form" src={logo} />
          <S.Title>Criar sua conta</S.Title>
        </S.LogoTitle>
        {children}
      </S.Content>
    </S.Bg>
  )
}

export default FormPage
