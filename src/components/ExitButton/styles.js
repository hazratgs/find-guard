import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  position: absolute;
  bottom: 0;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .3s ease;
  z-index: 20;
  text-decoration: none;
  
  &:hover {
    background-color: #272b33;
  }

  img {
    width: 18px;
    height: 18px;
    margin-bottom: 8px;
  }

  span {
    font-size: 12px;
    color: #fff;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    right: 0;
    top: 0;
    width: 60px;
    height: 60px;
  }
`
