import styled from 'styled-components'

export const Container = styled.div`
  background-color: #2B93FE;
  box-shadow: 0px 10px 25px rgba(43,147,254,0.5);
  border-radius: 4px;
  display: inline-flex;
  padding: 20px 30px 20px 20px;
  position: relative;
  margin-bottom: 30px;
`

export const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 20px;
`

export const Title = styled.h3`
  font-size: 14px;
  margin: 0 0 5px;
  color: #fff;
`

export const Description = styled.p`
  font-size: 12px;
  margin: 0;
  color: #fff;
`

export const Close = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background-image: url('/img/cancel.svg');
  background-position: center;
  background-size: 12px;
  background-repeat: no-repeat;
  cursor: pointer;
  opacity: .4;
  transition: all .3s ease;

  &:hover {
    opacity: 1;
  }
`
