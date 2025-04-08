import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { DataCharacter } from '../ContentCard'
import * as S from './styles'

const ContentCard = React.lazy(() => import('../ContentCard'))

function Content({ text }: { text: string }) {
  interface DataAPI {
    info: {
      count: number
      next: string | null
      pages: number
      previous: string | null
    }
    results: DataCharacter[]
  }

  const { data } = useQuery(
    ['characters'],
    () =>
      fetch(`https://rickandmortyapi.com/api/character/${text}`)
        .then(res => res.json())
        .then((res: DataAPI) => res.results),
    { suspense: true }
  )

  return (
    <S.Grid>
      {data?.map(character => (
        <ContentCard character={character} />
      ))}
    </S.Grid>
  )
}

export default Content
