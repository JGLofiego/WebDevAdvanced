import styled from 'styled-components'

export const Pizza1 = styled.span`
  color: #550312;
`

export const Pizza2 = styled.span`
  color: ${props => props.theme.buttonColor};
`

export const H1 = styled.h1`
  background-color: ${props => props.theme.primaryBgColor};
  font-family: 'Lacquer';
  grid-column: 2;
  margin: auto;

  @media (max-width: 540px) {
    font-size: 29px;
  }
`
export const Div = styled.div`
  height: 56px;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  align-items: center;
  justify-content: space-between;
`

export const Checkbox = styled.input`
  appearance: none;
  height: 20px;
  width: 40px;
  border-radius: 10px;
  border: solid 1px ${props => props.theme.primaryFontColor};
  display: flex;
  align-items: center;
  background-color: #f9f9f9;

  ::before {
    content: '';
    margin: 0 2px;
    display: block;
    height: 16px;
    width: 16px;
    border-radius: 50px;
    transition: 0.3s;
    background-color: #000000;
  }

  :checked {
    ::before {
      transform: translate(18px);
    }
  }
`

export const Bg = styled.header`
  width: 100%;
  background-color: ${props => props.theme.primaryBgColor};
`

export const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  width: 100%;
`

export const CheckboxTxt = styled.p`
  font-family: 'Nunito';
  color: ${props => props.theme.primaryFontColor};
  font-size: 12px;
`
