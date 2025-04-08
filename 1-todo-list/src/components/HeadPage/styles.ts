import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 28px;
`

export const Btn = styled.button`
  position: absolute;
  border: none;
  background: none;
  cursor: pointer;
  left: 2%;
  z-index: 2;
  &.active {
    position: fixed;
  }
`

export const TextBtn = styled.p`
  margin-left: 50px;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 700;
  &.active {
    margin-left: 0;
  }
`
