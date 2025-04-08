import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #4d4d4d;
  border-radius: 5px;
  width: 100%;
  gap: 16px;

  @media (max-width: 570px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 16px 16px 0;
  width: 100%;

  @media (max-width: 570px) {
    padding: 0 16px 16px 16px;
  }
`

export const Name = styled.h2`
  color: #44b6cd;
  font-size: 48px;

  @media (max-width: 860px) {
    font-size: 36px;
  }
`

export const StatusBall = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;

  &.Alive {
    background-color: #25ba00;
  }
  &.Dead {
    background-color: #de3232;
  }
  &.unknown {
    background-color: #d9d9d9;
  }
`

export const StatusDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const TextCard = styled.p`
  color: #ffffff;
  font-size: 18px;
`

export const CategoryText = styled.span`
  color: #b2df28;
`

export const Img = styled.img`
  border-radius: 5px 0 0 5px;
  @media (max-width: 570px) {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
`
