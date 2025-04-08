import styled from 'styled-components'

export const Div = styled.div`
  width: 100%;
  background-color: #181818;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100%;
    padding-top: 48px;
    padding-bottom: 16.67vh;
  }
`

export const IntroAndForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
`

export const Intro = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: white;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 335px;
  gap: 32px;
`

export const PasswordDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const CreateBtn = styled.button`
  background-color: #7cb224;
  padding: 8px 0;
  font-weight: 700;
  border-radius: 5px;
  width: 100%;
  color: white;
  border: 2px solid #7cb224;
  transition: 300ms;

  :hover {
    color: #7cb224;
    background-color: white;
  }
`

export const InputAndError = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Error = styled.p`
  font-size: 12px;
  color: #c24040;
`
