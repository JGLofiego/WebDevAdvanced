import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  border: none;
  background: none;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  background-color: #f3f2f1;
  padding: 18px 12px;
  width: 100%;
`
export const Div = styled.div`
  width: 100%;
`

export const BtnTxt = styled.h2`
  font-weight: 500;
  font-size: 18px;
  color: #415a77;
  font-family: 'Roboto';
`

export const DivInput = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 12px 12px 12px;
  width: 100%;
  background-color: #f3f2f1;
`
export const TextDivIn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
`
export const TextIn = styled.input`
  width: 100%;
  border: none;
  background-color: #ffffff;
  padding: 11px;
  border-radius: 5px;
  font-family: 'Roboto';

  :focus {
    outline: 2px solid #415a77;
  }
`

export const BtnDiv = styled.div`
  display: flex;
  gap: 12px;
`

export const addBtn = styled.button`
  padding: 8px 26px;
  background-color: #415a77;
  border: 1px solid #415a77;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  border-radius: 5px;
  cursor: pointer;

  :hover {
    transition: 0.3s;
    background-color: #ffffff;
    color: #415a77;
  }
`

export const cancelBtn = styled.button`
  padding: 8px 26px;
  background: none;
  border: 1px solid #ff4f5a;
  color: #ff4f5a;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  border-radius: 5px;
  cursor: pointer;

  :hover {
    transition: 0.3s;
    background-color: #ff4f5a;
    color: #ffffff;
  }
`

export const CheckBox = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 20px;
  border: 2px solid #415a77;

  :checked {
    content: url('src/assets/checked.svg');
    border: none;
    width: 18px;
    align-self: center;
  }
`
