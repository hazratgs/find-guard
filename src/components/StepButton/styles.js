import styled from 'styled-components'

export const Button = styled.button`
  width: 213px;
  height: 54px;
  background-color: #2B93FE;
  box-shadow: 0px 10px 25px rgba(43, 147, 254, 0.5);
  border-radius: 4px;
  border: 0;
  font-size: 18px;
  font-family: Ubuntu;
  color: #fff;
  text-align: left;
  padding: 0 17px;
  position: relative;
  display: flex;
  outline: none;
  cursor: pointer;
  transition: all .3s ease;
  margin-top: 40px;
  text-decoration: none;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    top: 1px;
  }

  span {
    flex: 1;
  }

  img {

  }
`
