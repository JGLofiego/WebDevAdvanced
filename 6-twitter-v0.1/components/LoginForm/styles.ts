import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #181818;

  @media (max-width: 768px) {
    height: 100%;
    padding-top: 48px;
    padding-bottom: 16.67vh;
  }
`

export const IntroForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 90%;
  max-width: 394px;
`

export const Intro = styled.h2`
  font-size: 24px;
  color: white;
  font-weight: 700;
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 335px;

  @media (max-width: 768px) {
    max-width: 394px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 16px 36px 16px 14.5px;
  border-radius: 5px;
  border: 1px solid #6d6d6d;

  ::placeholder {
    font-size: 16px;
    color: #6d6d6d;
  }

  :focus {
    outline: 1px solid #6d6d6d;
  }
`

export const DivPassword = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const ShowPassword = styled.button`
  margin-left: -40px;
  padding: 10px 7px;
`

export const LoginBtn = styled.button`
  width: 100%;
  padding: 8px 0;
  border-radius: 5px;
  background-color: #7cb224;
  transition: 300ms;
  color: white;
  font-weight: 700;
  font-size: 16px;

  :hover {
    background-color: #a4b982;
  }
`

export const HR = styled.hr`
  width: 100%;
  color: #7cb224;
`

export const NewAccountBtn = styled.button`
  width: 100%;
  padding: 8px 0;
  background-color: white;
  color: #7cb224;
  border: 2px solid #7cb224;
  border-radius: 5px;
  transition: 300ms;
  font-weight: 700;
  font-size: 16px;

  :hover {
    background-color: #7cb224;
    color: white;
  }
`

export const DivInputError = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`

export const ErrorMsg = styled.p`
  font-size: 12px;
  color: #c24040;
`
