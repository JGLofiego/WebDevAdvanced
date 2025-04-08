import styled, { createGlobalStyle } from 'styled-components'

const globalstyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
    }

    a{
        text-decoration: none;
    }

    .modal{
        width: 90%;
        max-width: 766px;
        height: 418px;
        position: absolute;
        background-color: white;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        padding: 24px 24px 64px 64px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        @media (max-width: 715px){
            height: 493px;
            padding: 24px 24px 64px 32px;
        }
    }

    .overlay{
        width: 100%;
        height: 100%;
        backdrop-filter: blur(5px);
        background-color: rgba(24,24,24, 0.25);
        position: absolute;
        top: 0;
    }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 960px;

  @media (max-width: 960px) {
    display: initial;
  }
`

export default globalstyles
