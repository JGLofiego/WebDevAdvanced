import styled from 'styled-components'

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (max-width: 768px) {
    background-color: #181818;
    padding-top: 16.67vh;
  }
`

export const Title = styled.h1`
  font-family: 'Rubik Wet Paint';
  font-size: 48px;

  @media (max-width: 768px) {
    color: white;
  }
`
