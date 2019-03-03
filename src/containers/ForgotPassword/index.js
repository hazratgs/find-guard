import React, { PureComponent } from 'react'
import isEmail from 'validator/lib/isEmail'
import {
  Container,
  Popup,
  Close,
  Title,
  Description,
  Form,
  Input,
  Button,
  SuccessMessage
} from './styles'

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
    this.setState({ successMessage: true })
  }

  change = (name) => (e) => {
    this.setState({ [name]: e.target.value }, () => this.buttonStatus())
  }

  buttonStatus = () => {
    const errors = []
    if (!isEmail(this.state.email)) errors.push('email')

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
        {this.state.successMessage && (
          <SuccessMessage>Информация по восстановлению пароля отправлена на email</SuccessMessage>
        )}
        <Popup>
          <Close to='/' />
          <Title>Восстановление пароля</Title>
          <Description>Укажите почту, которую вы использовали при регистрации.</Description>
          <Form>
            {items}
            <Button
              onClick={this.send}
              disabled={!this.state.buttonStatus}
            >
              Восстановить пароль
            </Button>
          </Form>
        </Popup>
      </Container>
    )
  }
}
