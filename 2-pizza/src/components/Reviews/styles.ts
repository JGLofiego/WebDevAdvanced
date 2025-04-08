import styled from 'styled-components'

export const Bg = styled.section`
  background-color: ${props => props.theme.secondaryBgColor};
  padding: 64px 0;
  font-family: 'Nunito';
  text-align: center;

  @media (max-width: 768px) {
    padding: 48px;
  }
`

export const Review = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const Message = styled.h3`
  font-weight: 400;
  font-size: 24px;
  color: ${props => props.theme.secondaryFontColor};
`

export const Person = styled.p`
  color: ${props => props.theme.secondaryFontColor};
  font-weight: 600;
`
