import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 4px;
`

export const Name = styled.span`
  font-size: 14px;
  color: #1D2029;
  font-family: Ubuntu;
  left: 16px;
  top: 0;
  left: 16;
  position: absolute;
  transform: translate(0, 17px) scale(1);
  transform-origin: top left;
  opacity: .4;
  z-index: 1;
  transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

  ${props => props.isset && `
    transform: translate(0, 7px) scale(0.85);
  `}
`

export const Text = styled.textarea`
  display: block;
  width: 100%;
  border: 0;
  height: 180px;
  padding: 19px 16px 7px 16px;
  font-family: Ubuntu;
  z-index: 20;
  outline: none;
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  resize: none;

  &:focus + span {
    transform: translate(0, 7px) scale(0.85);
  }
`
