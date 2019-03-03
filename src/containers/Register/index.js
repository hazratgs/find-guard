import React, { PureComponent } from 'react'
import isEmail from 'validator/lib/isEmail'
import {
  Container,
  Popup,
  Close,
  Title,
  Form,
  Input,
  Agreement,
  Button,
  Auth,
  ErrorMessage
} from './styles'

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
    this.setState({ requestFailed: true })
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

    this.setState({ errors: errors, buttonStatus: !errors.length })
  }

  render () {
    const items = this.state.inputs.map((item, i) => (
      <Input
        key={i}
        type={item.type}
        name={item.name}
        placeholder={item.placeholder}
        onChange={this.change(item.name)}
        error={this.state[item.name] !== null && this.state.errors.includes(item.name)}
      />
    ))

    return (
      <Container>
        {this.state.requestFailed && (
          <ErrorMessage>Не верное имя или пароль</ErrorMessage>
        )}
        <Popup>
          <Close to='/' />
          <Title>Регистрация</Title>
          <Form>
            {items}
            <Agreement>
              Регистрируясь вы соглашаетесь с <a href="#">условиями сервиса</a>
            </Agreement>
            <Button
              onClick={this.send}
              disabled={!this.state.buttonStatus}
            >
              Зарегистрироваться
            </Button>
            <Auth to='/main/auth'>Войти</Auth>
          </Form>
        </Popup>
      </Container>
    )
  }
}
