import styled from 'styled-components'

export const Bg = styled.section`
  background-color: ${props => props.theme.secondaryBgColor};
  padding: 96px 0;

  @media (max-width: 630px) {
    padding: 48px 0;
  }
`

export const ContentTxt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-family: 'Nunito';

  @media (max-width: 1360px) {
    width: 496px;
  }

  @media (max-width: 630px) {
    width: 100%;
    align-items: center;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1224px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 232px;

  @media (max-width: 1360px) {
    justify-content: space-between;
    gap: 0;
    width: 90%;
  }

  @media (max-width: 630px) {
    flex-direction: column-reverse;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  color: ${props => props.theme.secondaryIconTitleColor};

  @media (max-width: 630px) {
    font-size: 32px;
    text-align: center;
  }
`

export const Button = styled.button`
  padding: 8px 0;
  width: 164px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 700;
  font-size: 18px;
  font-family: 'Nunito';
  border: 1px solid ${props => props.theme.secondaryIconTitleColor};
  color: ${props => props.theme.secondaryIconTitleColor};
  background-color: ${props => props.theme.buttonColor};
`

export const Img = styled.img`
  @media (max-width: 1060px) {
    width: 49.5vw;
  }
  @media (max-width: 630px) {
    width: 100%;
  }
`

export const Desc = styled.p`
  color: ${props => props.theme.secondaryFontColor};
  @media (max-width: 630px) {
    text-align: center;
  }
`
