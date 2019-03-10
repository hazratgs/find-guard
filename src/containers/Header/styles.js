import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

  @media (max-width: 768px) {
    padding: 20px;
    justify-content: space-between;
  }
`

export const Logo = styled.img`
  @media (max-width: 768px) {
    width: 140px;
  }
`

export const Button = styled(Link)`
  position: absolute;
  right: 0;
  background-color: #fff;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  padding: 0 22px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .3s ease;
  color: #000;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    position: relative;
  }
`
