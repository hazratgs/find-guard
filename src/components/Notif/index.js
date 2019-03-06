import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { closeNotifRegister } from '../../actions/account'
import { Container, Icon, Title, Description, Close } from './styles'

@connect(
  state => ({ register: state.account.register }),
  dispatch => ({ close: bindActionCreators(closeNotifRegister, dispatch) })
)
export default class Notif extends PureComponent {
  close = () => this.props.close()

  render () {
    if (!this.props.register) return null
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
