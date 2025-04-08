import styled from 'styled-components'

export const Bg = styled.section`
  width: 100%;
  background-color: ${props => props.theme.primaryBgColor};
`
export const Perks = styled.div`
  display: flex;
  text-align: center;
  padding: 96px 0;
  gap: 20px;
  align-items: flex-start;
  font-family: 'Nunito';

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 64px 0;
  }
`

export const Perk = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 32px;
`

export const ChefImg = styled.img`
  padding: 24px 23.95px;
`

export const IngredientIcon = styled.img`
  padding: 16px;
`

export const PerkTitle = styled.h2`
  color: ${props => props.theme.primaryIconTitleColor};
`

export const PerkTxt = styled.p`
  color: ${props => props.theme.primaryFontColor};
`
