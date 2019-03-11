import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: #191C23;
    opacity: 0.7;
    z-index: 5;
  }

  @media (max-width: 768px) {
    background: #EFEFEF;
  }
`

export const Popup = styled.div`
  background: #EFEFEF;
  border-radius: 10px;
  width: 640px;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`

export const Close = styled(Link)`
  position: absolute;
  right: 30px;
  top: 30px;
  width: 24px;
  height: 24px;
  background-image: url('/img/close.svg');
  background-size: 12px;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const Title = styled.h2`
  text-align: center;
  line-height: 24px;
  font-size: 24px;
  text-transform: uppercase;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 28px;
`

export const Form = styled.div`
  width: 320px;
  margin: 30px auto 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Input = styled.input`
  width: 100%;
  background: #FFFFFF;
  border-radius: 4px;
  border: 0;
  height: 50px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 14px;
  box-sizing: border-box;

  ${props => props.error && `
    border: 2px solid #FF5050;
    box-sizing: border-box;
    border-radius: 4px;
  `}
`

export const Agreement = styled.p`
  font-size: 12px;
  text-align: center;

  a {
    color: #0092ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Button = styled.button`
  background: #2B93FE;
  box-shadow: 0px 10px 25px rgba(43, 147, 254, 0.5);
  border-radius: 4px;
  color: #fff;
  font-size: 18px;
  height: 54px;
  border: none;
  width: 100%;
  cursor: pointer;
  margin-top: 15px;
  transition: all .3s ease;
  position: relative;
  outline: none;

  &:active {
    top: 1px;
  }

  &:disabled {
    background: #D1D1D1;
    box-shadow: none;
    cursor: default;
    opacity: .7;
  }
`

export const NavLink = styled(Link)`
  font-size: 14px;
  margin-top: 30px;
  display: inline-block;
  cursor: pointer;
  font-weight: 500;
  color: #000;
  text-decoration: none;
`

export const ErrorMessage = styled.div`
  background: #FF5050;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  padding: 24px;
  box-sizing: border-box;
  margin-bottom: 4px;
  position: relative;
  z-index: 10;
  width: 640px;
  text-align: center;
`

export const SuccessMessage = styled.div`
  background: #2B93FE;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  padding: 24px;
  box-sizing: border-box;
  margin-bottom: 4px;
  position: relative;
  z-index: 10;
  width: 640px;
  text-align: center;
`
