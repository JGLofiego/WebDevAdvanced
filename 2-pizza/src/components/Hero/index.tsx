import React from 'react'

import pizza from '../../assets/pizza.png'
import * as S from './styles'

function Hero() {
  return (
    <S.Bg>
      <S.Content>
        <S.ContentTxt>
          <S.Title>Melhor pizzaria da cidade</S.Title>
          <S.Desc>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </S.Desc>
          <S.Button>Peça Online</S.Button>
        </S.ContentTxt>
        <S.Img alt="Imagem de uma pizza" src={pizza} />
      </S.Content>
    </S.Bg>
  )
}

export default Hero
