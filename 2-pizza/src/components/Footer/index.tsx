import React from 'react'

import copyright from '../../assets/copyright.svg'
import * as S from './styles'

function Footer() {
  return (
    <S.Bg>
      <S.Copyright>
        <img alt="Símbolo de copyright" src={copyright} />
        <S.Txt>Copyright - PIZZAPIZZA</S.Txt>
      </S.Copyright>
    </S.Bg>
  )
}

export default Footer
