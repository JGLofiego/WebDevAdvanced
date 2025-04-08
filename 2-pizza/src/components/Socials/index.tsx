import React from 'react'

import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import * as S from './styles'

function Socials() {
  return (
    <S.Bg>
      <S.Content>
        <S.Logo>
          <S.Pizza1>Pizza</S.Pizza1>
          <S.Pizza2>Pizza</S.Pizza2>
        </S.Logo>
        <S.LinksContainer>
          <a
            href="https://www.instagram.com/infojrufba/"
            rel="noreferrer"
            target="_blank">
            <img alt="Ícone do Instagram" src={instagram} />
          </a>
          <a
            href="https://pt-br.facebook.com/infojrnews"
            rel="noreferrer"
            target="_blank">
            <img alt="Ícone do Facebook" src={facebook} />
          </a>
        </S.LinksContainer>
      </S.Content>
    </S.Bg>
  )
}

export default Socials
