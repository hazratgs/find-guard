import React, { PureComponent } from 'react'
import cookies from 'js-cookie'
import { Container } from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../actions/account'

@connect(
  null,
  dispatch => ({
    logout: bindActionCreators(logout, dispatch)
  })
)
export default class ExitButton extends PureComponent {
  handle = () => {
    cookies.remove('token')
    this.props.logout()
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
