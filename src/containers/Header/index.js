import React, { PureComponent } from 'react'
import {
  Container,
  Logo,
  Button
} from './styles'

export default class Header extends PureComponent {
  render () {
    return (
      <Container>
        <Logo src='/img/logo.svg'/>
        <Button>Войти</Button>
      </Container>
    )
  }
}
