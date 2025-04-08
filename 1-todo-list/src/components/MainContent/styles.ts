import styled from 'styled-components'

export const Grid = styled.ul`
  width: 100%;
  padding: 0 12px;
  background: repeating-linear-gradient(
    #00000080,
    #00000080 1px,
    #ffffff 1px,
    #ffffff 47px
  );
  flex-grow: 1;
`

export const TaksDiv = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  height: 47px;
`

export const CheckboxTxt = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const BtnDiv = styled.div`
  display: flex;
  gap: 16px;
`

export const TasksTxt = styled.p`
  font-family: 'Roboto';
`

export const ImportantCheckbox = styled.input`
  appearance: none;
  width: 20px;
  height: 19px;
  content: url('src/assets/importantCheckbox.svg');

  :checked {
    content: url('src/assets/importantIconActive.svg');
  }
`

export const DeleteBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`
