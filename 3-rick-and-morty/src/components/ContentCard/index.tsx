import React from 'react'

import EpisodeName from '../EpisodeName'
import * as S from './styles'

export interface DataCharacter {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: { name: string; url: string }
  name: string
  origin: { name: string; url: string }
  species: string
  status: string
  type: string
  url: string
}

function ContentCard({ character }: { character: DataCharacter }) {
  return (
    <S.Card key={character.id}>
      <S.Img alt={`${character.name}`} src={character.image} />
      <S.InfoDiv>
        <S.Name>{character.name}</S.Name>
        <S.StatusDiv>
          <S.StatusBall className={character.status} />
          <S.TextCard>{`${character.status} - ${character.species}`}</S.TextCard>
        </S.StatusDiv>
        <S.TextCard>
          <S.CategoryText>Last Known Location: </S.CategoryText>
          <span>{character.location.name}</span>
        </S.TextCard>
        <S.TextCard>
          <S.CategoryText>First seen in: </S.CategoryText>
          <EpisodeName url={character.episode[0]} />
        </S.TextCard>
      </S.InfoDiv>
    </S.Card>
  )
}

export default ContentCard
