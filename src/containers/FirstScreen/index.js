import React, { PureComponent } from 'react'
import Header from '../Header'
import {
  Container,
  Content,
  Title,
  Description,
  Button
} from './styles'

export default class FirstScreen extends PureComponent {
  render () {
    return (
      <Container>
        <Header />
        <Content>
          <Title>Найди подходящую<br/>охрану или место работы</Title>
          <Description>Крупнейшая база частных охранников с лицензией на оружие.</Description>
          <Button to='/main/register'>Зарегистрироваться и разместить резюме</Button>
        </Content>
      </Container>
    )
  }
}
