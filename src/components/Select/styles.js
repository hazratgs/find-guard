import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 4px;

  &::after {
    position: absolute;
    width: 16px;
    height: 16px;
    background: url('/img/select-arrow.svg');
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    right: 16px;
    bottom: 0;
    top: 0;
    z-index: 5;
    margin: auto;
    content: '';
  }

  ${props => props.small && `
    width: 210px;
  `}

  ${props => props.error && `
    box-shadow: 0 0 0 2px red;
  `}
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
  /* transform: translate(0, 7px) scale(0.85); */

  ${props => props.isset && `
    transform: translate(0, 7px) scale(0.85);
  `}
`

export const SelectElement = styled.select`
  display: block;
  width: 100%;
  border: 0;
  height: 50px;
  padding: 19px 16px 7px 16px;
  font-family: Ubuntu;
  z-index: 20;
  outline: none;
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
`
