import styled from 'styled-components'

export const Container = styled.div`
  height: 50px;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0 10px 0 20px;
  margin-bottom: 10px;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;

  input {
    display: none;

    &:checked + i {
      background-image: url('/img/checked.svg');
    }
  }

  span {
    flex: 1;
    font-size: 14px;
    font-family: Ubuntu;
  }

  i {
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 4px;
    background-position: center;
    background-repeat: no-repeat;
  }
`
