import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`

export const DivHorizontal = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }
`

export default GlobalStyle
