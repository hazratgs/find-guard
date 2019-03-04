import React, { PureComponent } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { successAuthorization } from '../../actions/profile'
import isEmail from 'validator/lib/isEmail'
import Form from '../../containers/Form'

@withRouter
@connect(
  state => ({ }),
  dispatch => ({
    successAuthorization: bindActionCreators(successAuthorization, dispatch)
  })
)
export default class Auth extends PureComponent {
  state = {
    inputs: [
      { type: 'email', name: 'email', placeholder: 'Электронная почта' },
      { type: 'password', name: 'password', placeholder: 'Пароль' }
    ],
    email: null,
    password: null,
    errors: [],
    buttonStatus: false,
    requestFailed: false
  }

  send = () => {
    if (this.state.email === 'user@example.com' && this.state.password === '123456') {
      this.props.successAuthorization(true)
      this.props.history.push('/profile')
    } else {
      this.setState({ requestFailed: 'Не верное имя или пароль' })
    }
  }

  change = (name) => (e) => {
    this.setState({ [name]: e.target.value }, () => this.buttonStatus())
  }

  buttonStatus = () => {
    const errors = []
    if (!isEmail(this.state.email)) errors.push('email')
    if (this.state.password !== null && this.state.password.length === 0) errors.push('password')

    const button = () => {
      const nullStatus = (this.state.password === null || this.state.email === null)
      if (nullStatus) return false
      return !errors.length
    }

    this.setState({ errors: errors, buttonStatus: button() })
  }

  render () {
    return (
      <Form
        inputs={this.state.inputs}
        send={this.send}
        change={this.change}
        buttonStatus={this.buttonStatus}
        title='Войти'
        description='Вход для зарегистрированных пользователей'
        agreement={[
          'Не можете войти? ',
          <Link key='agreement-1' to='/main/forgot-password'>Восстановить пароль</Link>
        ]}
        button='Войти'
        link='Зарегистрироваться'
        linkPath='/main/register'
        state={this.state}
      />
    )
  }
}
