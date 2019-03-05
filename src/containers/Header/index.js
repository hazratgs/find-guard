import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Logo,
  Button
} from './styles'

@connect(state => ({ login: state.account.login }))
export default class Header extends PureComponent {
  render () {
    const button = this.props.login
      ? { txt: 'Личный кабинет', to: '/profile' }
      : { txt: 'Войти', to: '/main/auth' }

    return (
      <Container>
        <Logo src='/img/logo.svg'/>
        <Button to={button.to}>{button.txt}</Button>
      </Container>
    )
  }
}
