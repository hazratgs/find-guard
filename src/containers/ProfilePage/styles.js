import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`

`

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  color: #191C23;
  margin: 0 0 20px;
`

export const Small = styled.span`
  font-size: 12px;
  color: #1D2029;
  opacity: 0.4;
  font-family: Ubuntu;
  display: block;
`

export const ReadButton = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #2B93FE;
  font-size: 14px;
  cursor: pointer;

  img {
    margin-right: 10px;
  }
`

export const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
  max-width: 960px;
`

export const AboutItem = styled.div`
  flex: 33.33%;
  max-width: 320px;
  margin-bottom: 20px;

  strong {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    line-height: 20px;
    font-size: 16px;
    color: #191C23;
    display: block;
    margin-top: 5px;
  }

  @media (max-width: 758px) {
    flex: 50%;
    max-width: auto;
  }

  @media (max-width: 540px) {
    flex: 100%;
    max-width: auto;
  }
`

export const Text = styled.div`
  width: 532px;
  padding-bottom: 40px;

  p {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    color: #191C23;
  }
`

export const Docs = styled.div`
  margin-top: 16px;
  width: 380px;
`

export const DocsItem = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 8px;
  background: #FFFFFF;
  border-radius: 4px;
  height: 50px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  color: #1D2029;
  padding: 0 20px;
`
