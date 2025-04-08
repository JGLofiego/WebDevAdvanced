import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 48px 24px;
  width: 70%;
  margin: 0 auto;
  padding-bottom: 96px;

  @media (max-width: 860px) {
    display: flex;
    align-items: fl;
    flex-direction: column;
    gap: 48px;
    width: 90%;
    max-width: 600px;
  }
`
