import styled from 'styled-components'

export const ImgPlaceholder = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  background-color: #717171;
  border-radius: 5px 0 0 5px;

  @media (max-width: 570px) {
    max-width: none;
    height: 90vw;
  }
`

export const TitlePlaceholder = styled.div`
  width: 100%;
  max-width: 190px;
  height: 48px;
  background-color: #717171;

  @media (max-width: 1748px) {
    max-width: 240px;
  }

  @media (max-width: 860px) {
    height: 36px;
  }
`

export const StatusPlaceholder = styled.div`
  width: 100%;
  max-width: 170px;
  height: 18px;
  background-color: #717171;
`

export const LocationPlaceholder = styled.div`
  width: 100%;
  max-width: 258px;
  height: 18px;
  background-color: #717171;

  @media (max-width: 1748px) {
    max-width: 340px;
  }
`

export const EpisodePlaceholder = styled.div`
  width: 100%;
  max-width: 258px;
  height: 18px;
  background-color: #717171;

  @media (max-width: 1748px) {
    max-width: 440px;
  }
`
