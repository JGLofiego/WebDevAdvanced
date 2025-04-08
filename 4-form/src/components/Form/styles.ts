import styled from 'styled-components'

export const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  @media (max-width: 461px) {
    width: 100%;
  }
`

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 32px;

  @media (max-width: 461px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export const Input = styled.input`
  padding: 14.5px 16px;
  border: 1px solid #6d6d6d;
  border-radius: 5px;

  ::placeholder {
    color: #6d6d6d;
    font-size: 16px;
  }

  :focus {
    outline: 2px solid #6d6d6d;
  }
`

export const TermsTxt = styled.p`
  color: white;
`

export const TermsLink = styled.a`
  color: #55aaf9;
`

export const TermsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: flex-start;

  @media (max-width: 461px) {
    align-self: initial;
  }
`

export const FormBtn = styled.button`
  border: none;
  background: none;
  background-color: black;
  padding: 8px 48px;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  @media (max-width: 461px) {
    width: 100%;
  }
`
