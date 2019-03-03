import styled from 'styled-components'

export const Container = styled.div`

`

export const Description = styled.p`
  font-family: Ubuntu;
  font-size: 12px;
  color: #BCBCBC;
`

export const Zone = styled.div`
  border: 1px dashed #979797;
  border-radius: 4px;
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  cursor: pointer;
  text-align: center;

  ${props => props.isDragActive && `
    border: 2px dashed #2B93FE;
  `}

  p {
    font-size: 14px;
    line-height: 20px;
    color: #9B9C9F;

    span {
      color: #2B93FE;
    }
  }
`

export const List = styled.div`
  margin-top: 20px;
`

export const ListItem = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 8px;
  height: 50px;
  padding: 0 15px 0 20px;

  span {
    flex: 1;
    padding-right: 25px;
  }

  button {
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: none;
    background-image: url('/img/delete-item.svg');
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
`
