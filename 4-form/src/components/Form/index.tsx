import React, { useContext } from 'react'

import EmailContext from '../../contexts/EmailContext'
import * as S from './styles'

function Form({ setModal }: { setModal: (newState: boolean) => void }) {
  const { setEmail } = useContext(EmailContext)

  return (
    <S.FormLayout
      onSubmit={e => {
        e.preventDefault()
        setModal(true)
      }}>
      <S.InputGrid>
        <S.Input placeholder="Nome" type="text" />
        <S.Input placeholder="Sobrenome" type="text" />
        <S.Input
          placeholder="Email"
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
        <S.Input placeholder="CPF" type="text" />
        <S.Input placeholder="Senha" type="password" />
        <S.Input placeholder="Confirmar senha" type="password" />
      </S.InputGrid>
      <S.TermsContainer>
        <input type="checkbox" />
        <S.TermsTxt>
          Eu aceito os{' '}
          <S.TermsLink
            href="https://www.youtube.com/watch?v=EE-xtCF3T94"
            target="__blank">
            termos e condições
          </S.TermsLink>
        </S.TermsTxt>
      </S.TermsContainer>
      <S.FormBtn type="submit">Cadastrar</S.FormBtn>
    </S.FormLayout>
  )
}

export default Form
