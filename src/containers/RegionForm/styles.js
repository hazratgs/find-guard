import styled from 'styled-components'

export const Container = styled.div`

`

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  color: #191C23;
  margin: 0;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin: 7px 0 25px;
`

export const Form = styled.div`
  max-width: 380px;
  padding: 25px 0;
`

export const Label = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;

  input {
    margin-right: 15px;
    position: relative;
    top: -2px;
  }
`
