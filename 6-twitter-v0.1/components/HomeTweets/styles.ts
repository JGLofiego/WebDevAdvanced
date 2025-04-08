import styled from 'styled-components'

export const ComponentDiv = styled.div`
  width: 100%;
  height: calc(100vh - 69px);
  width: 100%;
  max-width: 704px;
  border-left: 3px solid #3f3f3f;
  border-right: 3px solid #3f3f3f;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 48px 16px 16px 16px;
  gap: 16px;
  border-bottom: 3px solid #3f3f3f;
`

export const LoggedUserImg = styled.img`
  height: 72px;
  width: 72px;
  border-radius: 100px;
`

export const DivInForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 14.5px;
  background: none;
  border: none;
  color: white;

  ::placeholder {
    color: #6d6d6d;
  }

  :focus {
    outline: 2px solid #7cb224;
  }
`

export const FofocaBtn = styled.button`
  color: white;
  background-color: #7cb224;
  padding: 8px 32px;
  font-weight: 700;
  border-radius: 5px;
`
