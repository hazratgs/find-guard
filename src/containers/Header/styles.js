import styled from 'styled-components'

export const Container = styled.div`
  padding: 40px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  max-width: 1140px;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`

export const Logo = styled.img`

`

export const Button = styled.button`
  position: absolute;
  right: 0;
  background-color: #fff;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  width: 100px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    opacity: 0.9;
  }
`
