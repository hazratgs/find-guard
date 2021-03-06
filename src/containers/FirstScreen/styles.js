import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 700px;
  background-color: #191C23;
  background-image: url('/img/bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;

  @media (max-width: 768px) {
    min-height: auto;
  }
`

export const Content = styled.div`
  height: 100%;
  width: 100vw;
  max-width: 1140px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-top: 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`

export const Title = styled.h1`
  color: #fff;
  line-height: 60px;
  font-size: 44px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 23px;
    line-height: 28px;
  }
`

export const Description = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  font-weight: normal;
  margin: 14px 0;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`

export const Button = styled(Link)`
  background: #2B93FE;
  border-radius: 8px;
  color: #fff;
  padding: 12px 23px;
  display: block;
  margin-top: 30px;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  transition: all .3s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`
