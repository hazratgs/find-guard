import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { forgotPassword } from '../../actions/account'
// import isEmail from 'validator/lib/isEmail'
import Form from '../../containers/Form'

@connect(
  state => ({
    success: state.account.successForgotPassword,
    error: state.account.errorForgotPassword
  }),
  dispatch => ({ forgotPassword: bindActionCreators(forgotPassword, dispatch) })
)
export default class ForgotPassword extends PureComponent {
  state = {
    inputs: [
      { type: 'email', name: 'email', placeholder: 'Электронная почта' }
    ],
    email: null,
    errors: [],
    buttonStatus: false,
    successMessage: false
  }

  send = () => {
    this.props.forgotPassword(this.state.email)
    // this.setState({ successMessage: 'Информация по восстановлению пароля отправлена на email' })
  }

  change = (name) => (e) => {
    this.setState({ [name]: e.target.value }, () => this.buttonStatus())
  }

  buttonStatus = () => {
    const errors = []
    // if (!isEmail(this.state.email)) errors.push('email')

    const button = () => {
      const nullStatus = this.state.email === null
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
        title='Восстановление пароля'
        description='Укажите почту, которую вы использовали при регистрации.'
        button='Восстановить пароль'
        state={this.state}
        errorForm={this.props.error}
        errorMessage='Email адрес не зарегистрирован! Пожалуйста проверьте и попробуйте снова'
        successForm={this.props.success}
        successMessage='Проверьте ваш email для подробной информации о том, как сбросить пароль.'
      />
    )
  }
}
