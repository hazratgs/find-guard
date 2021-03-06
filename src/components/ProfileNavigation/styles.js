import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  width: 80px;
  min-height: 100%;
  background-color: #191C23;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    min-height: auto;
  }
`

export const Wrapper = styled.div`
  width: 80px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    position: relative;
    height: auto;
    width: 100%;
  }
`

export const Logo = styled(NavLink)`
  display: block;
  width: 80px;
  height: 80px;
  background-image: url('/img/logo-min.svg');
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    display: none;
  }
`
export const NavWrapper = styled.div`

  @media (max-width: 768px) {
    display: flex;
  }
`

export const NavItem = styled(NavLink)`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }

  &.active {
    background-color: rgba(43, 147, 254, 0.5);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`
