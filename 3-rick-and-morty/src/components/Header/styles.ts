import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 48px;
  padding: 96px 0;
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 600px;
`

export const LogoBtn = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: none;
  border: none;
  gap: 32px;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`

export const LogoTxt = styled.h1`
  font-size: 96px;
  color: #44b6cd;
  -webkit-text-stroke: 2px #b2df28;

  @media (max-width: 420px) {
    font-size: 22.8vw;
  }
`

export const SearchBar = styled.input`
  padding: 16px;
  border-radius: 5px;
  border: none;
  width: 600px;
  color: #1b5865cc;

  ::placeholder {
    color: #1b5865cc;
  }
`

export const SearchBtn = styled.button`
  background: none;
  border: none;
  margin-left: -44px;
  padding: 10.4px 10px;
  cursor: pointer;
`
