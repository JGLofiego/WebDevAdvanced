import styled from 'styled-components'

export const ModalBg = styled.div`
  @media (max-width: 1024px) {
    &.active {
      background-color: #00000080;
      position: fixed;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 0;
    }
  }
`

export const Modal = styled.div`
  background-color: #f3f2f1;
  visibility: hidden;
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 100vh;
  top: 0;
  padding-top: 70px;
  transition: 0.3s;
  margin-left: -290px;
  &.active {
    visibility: visible;
    display: flex;
    margin-left: 0;
    transition: 0.3s;
  }
`

export const LinksContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 2vw;
  gap: 23px;
  margin-top: 76px;
`

export const Link = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  cursor: pointer;
`

export const LinkText = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  &.active {
    font-weight: 500;
    color: #415a77;
  }
`

export const ImgTxt = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`
export const Counter = styled.p`
  margin-right: 23px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 17px;

  &.active {
    font-weight: 500;
    color: #415a77;
  }
`
