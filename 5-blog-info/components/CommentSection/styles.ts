import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 96px;
  padding-bottom: 128px;
  width: 90%;
  max-width: 808px;
`

export const CommentsAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 100%;
`

export const CommentsTitle = styled.h2`
  font-size: 32px;
`

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`

export const SingleComment = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  gap: 18px;
`

export const NameDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Name = styled.h4`
  font-weight: 500;
  font-size: 18px;
`

export const Date = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #464646;
`

export const Message = styled.p`
  font-size: 16px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 600px;
`

export const Input = styled.input`
  padding: 14.5px 16px;
  border: 1px solid #6d6d6d;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;

  ::placeholder {
    font-size: 16px;
    color: #6d6d6d;
  }

  &.comment {
    grid-column: 1/3;
  }
`

export const AllInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 32px;
  width: 100%;

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`

export const FormBtn = styled.button`
  background: none;
  border: none;
  background-color: #7cb224;
  padding: 8px 32px;
  color: white;
  font-weight: 700;
  border-radius: 5px;
`
