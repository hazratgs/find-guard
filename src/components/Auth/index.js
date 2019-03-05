import React, { PureComponent } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../../actions/account'
import isEmail from 'validator/lib/isEmail'
import Form from '../../containers/Form'

@withRouter
@connect(
  state => ({
    errorLogin: state.account.errorLogin,
    token: state.account.token
  }),
  dispatch => ({
    login: bindActionCreators(login, dispatch)
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
    this.props.login({
      username: this.state.email,
      password: this.state.password
    })
  }

  change = (name) => (e) => {
    this.setState({ [name]: e.target.value }, () => this.buttonStatus())
  }

  buttonStatus = () => {
    const errors = []
    if (this.state.email !== 'admin') {
      if (!isEmail(this.state.email)) errors.push('email')
    }
    if (this.state.password !== null && this.state.password.length === 0) errors.push('password')

    const button = () => {
      const nullStatus = (this.state.password === null || this.state.email === null)
      if (nullStatus) return false
      return !errors.length
    }

    this.setState({ errors: errors, buttonStatus: button() })
  }

  render () {
    if (this.props.token) return <Redirect to='/profile' />
    return (
      <Form
        inputs={this.state.inputs}
        send={this.send}
        change={this.change}
        buttonStatus={this.buttonStatus}
        errorLogin={this.props.errorLogin}
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
