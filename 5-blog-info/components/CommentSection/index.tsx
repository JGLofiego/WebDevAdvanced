import React from 'react'

import * as S from './styles'

function CommentSection() {
  return (
    <S.Div>
      <S.CommentsAndTitle>
        <S.CommentsTitle>Comentários (2)</S.CommentsTitle>
        <S.Comments>
          <S.SingleComment>
            <picture>
              <img alt="Comentarista 1" src="/images/avatar-comment-1.png" />
            </picture>
            <S.CommentInfo>
              <S.NameDate>
                <S.Name>Aleatório</S.Name>
                <S.Date>há 1 semana</S.Date>
              </S.NameDate>
              <S.Message>Muito bom esse artigo!</S.Message>
            </S.CommentInfo>
          </S.SingleComment>
          <S.SingleComment>
            <picture>
              <img alt="Comentarista 2" src="/images/avatar-comment-2.png" />
            </picture>
            <S.CommentInfo>
              <S.NameDate>
                <S.Name>Aleatório 2</S.Name>
                <S.Date>há 2 semana</S.Date>
              </S.NameDate>
              <S.Message>Ótimo artigo!!</S.Message>
            </S.CommentInfo>
          </S.SingleComment>
        </S.Comments>
      </S.CommentsAndTitle>
      <S.Form>
        <S.AllInputs>
          <S.Input placeholder="Nome" type="text" />
          <S.Input placeholder="Email" type="email" />
          <S.Input
            className="comment"
            placeholder="Comentário..."
            type="text"
          />
        </S.AllInputs>
        <S.FormBtn>Comentar</S.FormBtn>
      </S.Form>
    </S.Div>
  )
}

export default CommentSection
