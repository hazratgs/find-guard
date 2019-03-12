import styled from 'styled-components'

export const Container = styled.div`
  width: 380px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

export const AppTerms = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-family: Ubuntu;
  color: #1D2029;
  opacity: .4;
  padding: 0;
  margin: 40px 0 0 40px;

  @media (max-width: 768px) {
    margin: 40px 0 0 20px;
    font-size: 12px;
    line-height: 16px;

    br {
      display: none;
    }
  }
`

export const ErrorMessage = styled.p`
  color: red;
  padding: 20px 0;
  font-size: 13px;
`
