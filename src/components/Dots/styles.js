import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const Item = styled.div`
  width: 24px;
  height: 4px;
  background-color: #181B22;
  opacity: 0.1;
  border-radius: 4px;
  margin-right: 8px;

  ${props => props.active && `
    opacity: 1;
    background-color: #2B93FE;
  `}
`
