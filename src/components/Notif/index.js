import React, { PureComponent } from 'react'
import { Container, Icon, Title, Description, Close } from './styles'

export default class Notif extends PureComponent {
  state = {
    visible: true
  }

  close = () => this.setState({ visible: false })

  render () {
    if (!this.state.visible) return false

    return (
      <Container>
        <Icon src='/img/check-box.svg'/>
        <Close onClick={this.close} />
        <div>
          <Title>Ваша заявка принята.</Title>
          <Description>В ближайшее время с Вами сяжется наш менеджер</Description>
        </div>
      </Container>
    )
  }
}
