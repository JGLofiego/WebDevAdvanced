import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const Header = styled.header`
  width: 100%;
  padding: 12px 0;
  border-bottom: 1px solid #00000080;
  font-family: 'Roboto';
`

export const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0 auto;
  width: 90%;
  max-width: 1224px;
`

export const Footer = styled.footer`
  width: 100%;
  height: 64px;
  background-color: #7cb224;
`

export const Logo = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
`
