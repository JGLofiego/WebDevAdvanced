import styled from 'styled-components'

export const MajorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`

export const ErrorTxt = styled.h2`
  color: #ffffff;
  font-size: 32px;
  text-align: center;

  @media (max-width: 522px) {
    width: 90%;
  }
`

export const ImgAnd404 = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const Txt404 = styled.h2`
  font-size: 256px;
  color: #44b6cd;
  @media (max-width: 522px) {
    font-size: 49vw;
  }
`

export const Green = styled.span`
  color: #b2df28;
`

export const Img = styled.img`
  width: 100%;
`
