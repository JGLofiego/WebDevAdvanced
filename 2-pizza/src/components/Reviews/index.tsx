import React from 'react'

import quoteIcon from '../../assets/quoteIcon.svg'
import * as S from './styles'

function Reviews() {
  return (
    <S.Bg>
      <S.Review>
        <img alt="Ícone de aspas" src={quoteIcon} />
        <S.Message>Melhor margherita do mundo</S.Message>
        <S.Person>Alguém importante</S.Person>
      </S.Review>
    </S.Bg>
  )
}

export default Reviews
