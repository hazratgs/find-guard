import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  margin-bottom: 39px;
`

export const Item = styled(Link)`
  font-size: 12px;
  color: #191C23;
  text-decoration: none;
  margin-right: 20px;
  position: relative;

  &:hover {
    text-decoration: underline;
  }

  &::after {
    content: '•';
    position: absolute;
    right: -12.5px;
    top: 1px;
    margin: auto;
  }

  &:last-child {
    opacity: .5;

    &::after {
      display: none;
    }
  }
`
