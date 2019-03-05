import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeAccount } from '../../actions/account'
import isEmail from 'validator/lib/isEmail'
import Form from '../../containers/Form'

@withRouter
@connect(
  state => ({ }),
  dispatch => ({ changeAccount: bindActionCreators(changeAccount, dispatch) })
)
export default class Register extends PureComponent {
  state = {
    inputs: [
      { type: 'email', name: 'email', placeholder: 'Электронная почта' },
      { type: 'password', name: 'password', placeholder: 'Пароль' },
      { type: 'password', name: 'confirmPassword', placeholder: 'Повторите пароль' }
    ],
    email: null,
    password: null,
    confirmPassword: null,
    errors: [],
    buttonStatus: false,
    requestFailed: false
  }

  send = () => {
    this.props.changeAccount({
      login: this.state.login,
      email: this.state.email,
      password: this.state.password
    })
    this.props.history.push('/profile/form')
  }

  change = (name) => (e) => {
    this.setState({ [name]: e.target.value }, () => this.buttonStatus())
  }

  buttonStatus = () => {
    const errors = []
    if (!isEmail(this.state.email)) errors.push('email')
    if (this.state.password !== null && this.state.password.length === 0) errors.push('password')
    if (this.state.confirmPassword !== null && this.state.confirmPassword.length === 0) errors.push('confirmPassword')
    if (this.state.confirmPassword !== this.state.password) errors.push('confirmPassword')

    const button = () => {
      const nullStatus = (
        this.state.password === null ||
        this.state.email === null ||
        this.state.confirmPassword === null
      )

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
        title='Регистрация'
        agreement={[
          'Регистрируясь вы соглашаетесь с ',
          <a key='agreement-1' href="#">условиями сервиса</a>
        ]}
        button='Зарегистрироваться'
        link='Войти'
        linkPath='/main/auth'
        state={this.state}
      />
    )
  }
}
