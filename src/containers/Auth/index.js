import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'
import {
  Container,
  Popup,
  Close,
  Title,
  Description,
  Form,
  Input,
  Agreement,
  Button,
  Auth,
  ErrorMessage
} from './styles'

export default class AuthPopup extends PureComponent {
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
    this.setState({ requestFailed: true })
  }

  change = (name) => (e) => {
    this.setState({ [name]: e.target.value }, () => this.buttonStatus())
  }

  buttonStatus = () => {
    const errors = []
    if (!isEmail(this.state.email)) errors.push('email')
    if (this.state.password !== null && this.state.password.length === 0) errors.push('password')

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
          <Title>Войти</Title>
          <Description>Вход для зарегистрированных пользователей</Description>
          <Form>
            {items}
            <Agreement>
            Не можете войти? <Link to='/main/forgot-password'>Восстановить пароль</Link>
            </Agreement>
            <Button
              onClick={this.send}
              disabled={!this.state.buttonStatus}
            >
              Войти
            </Button>
            <Auth to='/main/register'>Зарегистрироваться</Auth>
          </Form>
        </Popup>
      </Container>
    )
  }
}
