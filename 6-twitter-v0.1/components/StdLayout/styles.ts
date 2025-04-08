import styled from 'styled-components'

export const ComponentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #181818;
`

export const Header = styled.header`
  width: 100%;
  border-bottom: 3px solid #3f3f3f;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderInner = styled.div`
  width: 100%;
  max-width: 1222px;
  height: 66px;
  padding: 8px 16px;
`

export const Logo = styled.img`
  height: 100%;
`

export const MenusAndContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const MenuLeft = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 48px;
  margin-right: 48px;

  @media (max-width: 650px) {
    margin-right: 0;
  }
`

export const TopSideNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`

export const DivInLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 3px 20px 3px 10px;
  gap: 16px;
  color: white;
  border-radius: 50px;
  transition: 300ms;

  :hover {
    background-color: gray;
  }
`

export const LinkTxt = styled.h2`
  font-weight: 400;
  font-size: 24px;

  &&.bold {
    font-weight: 700;
  }

  @media (max-width: 650px) {
    display: none;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 14.5px 16px;
  background-color: #121212;
  border: 1px solid #6d6d6d;
  border-radius: 5px;
  color: white;

  ::placeholder {
    color: white;
  }

  :focus {
    outline: 1px solid #7cb224;
  }
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`

export const SearchBtn = styled.button`
  margin-left: -45px;
  padding: 10px;
  height: 44px;
`

export const SearchBtnImg = styled.img`
  height: 100%;
`

export const MenuRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 40%;
  max-width: 288px;
  margin-top: 48px;
  margin-left: 24px;
  margin-right: 24px;

  @media (max-width: 868px) {
    display: none;
  }
`

export const NewUsersDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  border: 3px solid #3f3f3f;
  border-radius: 10px;
`

export const NewUsersTxt = styled.h2`
  color: white;
  font-size: 24px;
`

export const ProfileIcon = styled.img`
  border-radius: 200px;
  width: 52px;
  height: 52px;
`

export const Profile = styled.div`
  display: flex;
  gap: 24px;
`

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const NameAndGithub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
`

export const Name = styled.h3`
  color: white;
  font-size: 18px;

  :hover {
    text-decoration: underline;
  }
`

export const Github = styled.p`
  color: #9f9f9f;
`

export const Bio = styled.p`
  color: white;
`

export const Test = styled.div`
  width: 100%;
  height: 100vh;
  width: 100%;
  max-width: 704px;
  border-left: 3px solid #3f3f3f;
  border-right: 3px solid #3f3f3f;
`

export const LogoutTxt = styled.h2`
  @media (max-width: 650px) {
    display: none;
  }
`
