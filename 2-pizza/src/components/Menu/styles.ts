import styled from 'styled-components'

export const Bg = styled.section`
  background-color: ${props => props.theme.primaryBgColor};
  padding: 96px 0;
  font-family: 'Nunito';
`

export const BackBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 1350px) {
    display: none;
  }
`

export const NextBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transform: rotate(180deg);
  @media (max-width: 1350px) {
    display: none;
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  gap: 64px;
`

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const HR = styled.hr`
  color: ${props => props.theme.primaryIconTitleColor};
  width: 45px;
`

export const Title = styled.h2`
  color: ${props => props.theme.primaryIconTitleColor};
  font-weight: 600;
`

export const MenuContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 24px;
`

export const MenuItems = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1120px) {
    overflow-x: scroll;
  }
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  padding: 48px 16px;
  background-color: ${props => props.theme.menuItemColor};
  border: solid 1px ${props => props.theme.primaryIconTitleColor};
  border-radius: 10px;
`

export const PizzaName = styled.h2`
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.theme.secondaryFontColor};
`

export const Desc = styled.p`
  color: ${props => props.theme.secondaryFontColor};
`

export const Price = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: ${props => props.theme.secondaryFontColor};
`

export const OrderNowBtn = styled.button`
  border: solid 1px ${props => props.theme.primaryIconTitleColor};
  background-color: ${props => props.theme.buttonColor};
  color: ${props => props.theme.primaryIconTitleColor};
  font-family: 'Nunito';
  padding: 8px 32px;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
`
