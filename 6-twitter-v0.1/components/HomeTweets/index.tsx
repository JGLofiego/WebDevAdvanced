import React from 'react'
import useSWR from 'swr'

import DataTweets from '../../interfaces/DataTweets'
import DataUsers from '../../interfaces/DataUsers'
import * as S from './styles'

function HomeTweets() {
  const me = useSWR('http://localhost:3000/api/me', (...args) =>
    fetch(...args).then(res => res.json() as Promise<{ payload: DataUsers }>)
  )

  const tweets = useSWR('http://localhost:3000/api/posts', (...args) =>
    fetch(...args).then(res => res.json() as Promise<DataTweets[]>)
  )

  return (
    <S.ComponentDiv>
      <S.Form action="/api/posts" method="POST">
        <S.DivInForm>
          <S.LoggedUserImg
            alt={me.data?.payload.name}
            src={`https://github.com/${me.data?.payload.github as string}.png`}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = '/assets/unknown.png'
            }}
          />
          <S.TextArea placeholder="No que você está pensando?" />
        </S.DivInForm>
        <S.FofocaBtn>Fofocar</S.FofocaBtn>
      </S.Form>

      <div>
        {tweets.data?.map(tweet => (
          <div>
            <p>{tweet.message}</p>
          </div>
        ))}
      </div>
    </S.ComponentDiv>
  )
}

export default HomeTweets
