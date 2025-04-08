import Link from 'next/link'
import React from 'react'

import * as S from './styles'

export interface DataPost {
  author: {
    avatar: string
    name: string
  }
  content: string
  description: string
  id: number
  post_category: string
  published_at: string
  thumbnail: string
  title: string
}

function Posts({ data }: { data: DataPost[] }) {
  return (
    <S.Main>
      <Link href={`/posts/${data[0].id}`}>
        <S.Flex>
          <picture>
            <S.HighlightImg
              alt={`Post número ${data[0].id}`}
              src={data[0].thumbnail}
            />
          </picture>
          <S.InfoTxt>
            <S.TopSideTxt>
              <S.Category>{data[0].post_category}</S.Category>
              <S.Title>{data[0].title}</S.Title>
              <S.Description>{data[0].description}</S.Description>
            </S.TopSideTxt>
            <S.Author>
              <picture>
                <img alt={`Avatar ${data[0].id}`} src={data[0].author.avatar} />
              </picture>
              <S.AuthorInfo>
                <S.AuthorName>{data[0].author.name}</S.AuthorName>
                <S.Date>{data[0].published_at}</S.Date>
              </S.AuthorInfo>
            </S.Author>
          </S.InfoTxt>
        </S.Flex>
      </Link>
      <S.Section>
        <S.RecentTxt>Recentes</S.RecentTxt>
        <S.PostList>
          {data?.map((post, index) => {
            if (index !== 0) {
              return (
                <li key={post.id}>
                  <Link href={`/posts/${post.id}`}>
                    <S.PostInfo>
                      <picture>
                        <S.PostImg
                          alt={`Post número ${post.id}`}
                          src={post.thumbnail}
                        />
                      </picture>
                      <S.PostInfoTxt>
                        <S.Category>{post.post_category}</S.Category>
                        <S.TitleDate>
                          <S.TitlePostList>{post.title}</S.TitlePostList>
                          <S.DatePost>{post.published_at}</S.DatePost>
                        </S.TitleDate>
                        <p>{post.description}</p>
                      </S.PostInfoTxt>
                    </S.PostInfo>
                  </Link>
                </li>
              )
            }
            return ''
          })}
        </S.PostList>
      </S.Section>
    </S.Main>
  )
}

export default Posts
