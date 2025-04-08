import styled from 'styled-components'

export const Bg = styled.section`
  background-color: ${props => props.theme.secondaryBgColor};
  padding: 24px 0;
  display: flex;
  justify-content: center;
`

export const Copyright = styled.p`
  color: ${props => props.theme.secondaryFontColor};
  font-family: 'Nunito';
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Txt = styled.p`
  color: ${props => props.theme.secondaryFontColor};
  font-size: 18px;
`
