import { useQuery } from '@tanstack/react-query'
import React from 'react'

import Text from './styles'

function EpisodeName({ url }: { url: string }) {
  interface DataEpisode {
    air_date: string
    characters: string[]
    created: string
    episode: string
    id: string
    name: string
    url: string
  }

  const { data } = useQuery(['episode'], () =>
    fetch(url)
      .then(res => res.json())
      .then((res: DataEpisode) => res.name)
  )

  return <Text>{data}</Text>
}

export default EpisodeName
