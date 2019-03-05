import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import {
  Container,
  Content,
  Title,
  Description,
  Button
} from './styles'

@connect(state => ({ login: state.account.login }))
export default class FirstScreen extends PureComponent {
  render () {
    return (
      <Container>
        <Header />
        <Content>
          <Title>Найди подходящую<br/>охрану или место работы</Title>
          <Description>Крупнейшая база частных охранников с лицензией на оружие.</Description>
          {!this.props.login && <Button to='/main/register'>Зарегистрироваться и разместить резюме</Button>}
        </Content>
      </Container>
    )
  }
}
