import React from 'react'

import { DataPost } from '../Posts'
import * as S from './styles'

function SinglePost({ post }: { post: DataPost }) {
  return (
    <S.Div>
      <S.TopInfo>
        <S.Title>{post.title}</S.Title>
        <S.PostPic>
          <S.PostImg alt={`Post número ${post.id}`} src={post.thumbnail} />
        </S.PostPic>
        <S.AuthorContainer>
          <picture>
            <S.AuthorImg
              alt={`Autor do post ${post.id}`}
              src={post.author.avatar}
            />
          </picture>
          <S.AuthorInfo>
            <S.AuthorName>{post.author.name}</S.AuthorName>
            <S.Date>{post.published_at}</S.Date>
          </S.AuthorInfo>
        </S.AuthorContainer>
      </S.TopInfo>
      <p>{post.content}</p>
    </S.Div>
  )
}

export default SinglePost
