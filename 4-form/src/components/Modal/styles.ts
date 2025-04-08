import styled from 'styled-components'

export const CloseBtn = styled.button`
  background: none;
  border: none;
  margin-left: auto;
  right: 0;
  cursor: pointer;
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const ThanksTxt = styled.h1`
  font-weight: 400;
  font-size: 32px;
  text-align: center;

  @media (max-width: 461px) {
    font-size: 24px;
  }
`

export const ConfirmationTxt = styled.p`
  text-align: center;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 246px;
`

export const DivSocial = styled.div`
  display: flex;
  gap: 24px;
`
