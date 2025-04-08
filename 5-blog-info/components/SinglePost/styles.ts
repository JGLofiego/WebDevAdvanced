import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 90%;
  max-width: 1016px;
  padding: 64px 0 96px 0;
`

export const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 808px;
`

export const Title = styled.h1`
  font-size: 48px;
`

export const PostPic = styled.picture`
  width: 100%;
`

export const PostImg = styled.img`
  width: 100%;
`

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: flex-start;
`

export const AuthorImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 40px;
`

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const AuthorName = styled.h3`
  font-size: 18px;
  font-weight: 500;
`

export const Date = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #474646;
`
