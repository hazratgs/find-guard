import React, { PureComponent } from 'react'
import cookies from 'js-cookie'
import { Container } from './styles'

export default class ExitButton extends PureComponent {
  handle = () => {
    cookies.remove('token')
  }

  render () {
    return (
      <Container to='/' onClick={this.handle}>
        <img src='/img/exit.svg' />
        <span>Выйти</span>
      </Container>
    )
  }
}
