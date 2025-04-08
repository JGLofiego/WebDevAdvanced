import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Creepster';
        src: url(./src/styles/fonts/Creepster-Regular.ttf);
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Creepster';
    }

    body{
        background-color: #18181b;
    }
`

export const Section = styled.section`
  max-width: 1600px;
  width: 64.8%;
  margin: 0 auto;
`

export default GlobalStyles
