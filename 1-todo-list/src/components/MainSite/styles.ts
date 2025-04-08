import styled from 'styled-components'

export const BtnContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const Section = styled.section`
  width: 100%;
  flex-grow: 1;
  padding: 0 2%;
  margin: 24px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 46px;
  &.active {
    margin-left: 290px;
  }
  @media (max-width: 1024px) {
    &.active {
      margin-left: 0;
    }
  }
`
export const Flex = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
`

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
