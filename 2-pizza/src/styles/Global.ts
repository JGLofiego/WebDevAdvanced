import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Section = styled.div`
  width: 90%;
  max-width: 1224px;
  margin: 0 auto;
`

export default GlobalStyles
