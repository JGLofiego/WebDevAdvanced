import React from 'react'

import poopybutthole from '../../assets/poopybutthole.png'
import * as S from './styles'

function ErrorComponent() {
  return (
    <S.MajorDiv>
      <S.ErrorTxt>OOOWee! There’s nothing to see here</S.ErrorTxt>
      <S.ImgAnd404>
        <S.Img alt="Mr Poopybutthole" src={poopybutthole} />
        <S.Txt404>
          4<S.Green>0</S.Green>4
        </S.Txt404>
      </S.ImgAnd404>
    </S.MajorDiv>
  )
}

export default ErrorComponent
