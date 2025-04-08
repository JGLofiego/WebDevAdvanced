import styled from 'styled-components'

export const Main = styled.main`
  width: 90%;
  padding: 64px 0 128px 0;
  max-width: 1224px;
  display: flex;
  flex-direction: column;
  gap: 96px;
`

export const HighlightImg = styled.img`
  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Flex = styled.a`
  display: flex;
  gap: 24px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const InfoTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0;

  @media (max-width: 1024px) {
    gap: 48px;
    padding: 24px 16px;
  }
`

export const TopSideTxt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Category = styled.h3`
  color: #7cb224;
  font-weight: 500;
  font-size: 14px;
`

export const Title = styled.h1`
  font-size: 32px;
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
`

export const AuthorName = styled.p`
  font-weight: 500;
  font-size: 18px;
`

export const Date = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #474646;
`

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  height: 100%;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;
`

export const RecentTxt = styled.h2`
  font-size: 32px;
`

export const PostList = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(392px, 1fr));
  grid-column-gap: 24px;
  grid-row-gap: 64px;

  @media (max-width: 890px) {
    display: flex;
    flex-direction: column;
  }
`

export const PostImg = styled.img`
  width: 100%;
  border-radius: 20px;
`

export const PostInfo = styled.a`
  display: flex;
  flex-direction: column;
  gap: 24px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    transform: scale(1.03);
  }
`

export const PostInfoTxt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 16px;
`

export const TitlePostList = styled.h2`
  font-weight: 600;
  font-size: 24px;
`

export const DatePost = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #463f3f;
`

export const TitleDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
