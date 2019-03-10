import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Content = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  background-color: #EFEFEF;
  padding: 30px 60px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }
`
