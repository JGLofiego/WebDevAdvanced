import styled from 'styled-components'

export const Bg = styled.section`
  background-color: ${props => props.theme.secondaryBgColor};
  padding: 48px 0;
  font-family: 'Nunito';

  @media (max-width: 790px) {
    padding: 38px 0 48px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 790px) {
    flex-direction: column;
    align-items: center;
    gap: 64px;
  }
`

export const TimeLocal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 790px) {
    gap: 50px;

    max-width: 392px;
    width: 100%;
  }
`

export const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Hours = styled.p`
  font-weight: 700;
  color: ${props => props.theme.secondaryFontColor};
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 36px;
`

export const InfoTxt = styled.p`
  color: ${props => props.theme.secondaryFontColor};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 392px;
  width: 90%;
  gap: 24px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const HR = styled.hr`
  width: 45px;
  color: ${props => props.theme.secondaryIconTitleColor};
`

export const Title = styled.h2`
  color: ${props => props.theme.secondaryIconTitleColor};
  font-weight: 600;
  font-size: 24px;
`

export const TextIn = styled.input`
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  font-family: 'Nunito';
  color: ${props => props.theme.primaryFontColor};

  background-color: ${props => props.theme.primaryBgColor};

  :focus {
    outline: 2px solid ${props => props.theme.secondaryIconTitleColor};
  }

  ::placeholder {
    color: ${props => props.theme.primaryFontColor};
  }
`

export const TextArea = styled.textarea`
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  font-family: 'Nunito';
  height: 128px;
  color: ${props => props.theme.primaryFontColor};
  background-color: ${props => props.theme.primaryBgColor};

  :focus {
    outline: 2px solid ${props => props.theme.secondaryIconTitleColor};
  }

  ::placeholder {
    color: ${props => props.theme.primaryFontColor};
  }
`

export const FormBtn = styled.button`
  font-family: 'Nunito';
  padding: 8px 32px;
  font-weight: 700;
  font-size: 16px;
  border-radius: 5px;
  width: 111px;
  align-self: center;
  background-color: ${props => props.theme.buttonColor};
  color: ${props => props.theme.secondaryIconTitleColor};
  border: 1px solid ${props => props.theme.secondaryIconTitleColor};
`
