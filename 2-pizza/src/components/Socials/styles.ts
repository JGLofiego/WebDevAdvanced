import styled from 'styled-components'

export const Bg = styled.section`
  background-color: ${props => props.theme.primaryBgColor};
  padding: 96px 0 80px;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`

export const Logo = styled.h1`
  font-family: 'Lacquer';
  font-size: 48px;
`

export const Pizza1 = styled.span`
  color: #550312;
`

export const Pizza2 = styled.span`
  color: ${props => props.theme.buttonColor};
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 36px;
`
