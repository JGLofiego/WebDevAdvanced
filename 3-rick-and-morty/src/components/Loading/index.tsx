import React from 'react'

import { Grid } from '../Content/styles'
import { Card, InfoDiv } from '../ContentCard/styles'
import * as S from './styles'

export function LoadingCard() {
  return (
    <Card>
      <S.ImgPlaceholder />
      <InfoDiv>
        <S.TitlePlaceholder />
        <S.StatusPlaceholder />
        <S.LocationPlaceholder />
        <S.EpisodePlaceholder />
      </InfoDiv>
    </Card>
  )
}

function Loading() {
  const arr = []

  for (let i = 0; i <= 21; i += 1) {
    arr.push(i)
  }

  return (
    <Grid>
      {arr.map(num => (
        <LoadingCard key={num} />
      ))}
    </Grid>
  )
}

export default Loading
