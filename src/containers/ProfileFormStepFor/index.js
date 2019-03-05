import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { changeAccount } from '../../actions/account'
import { Container, ButtonWrapper, AppTerms } from './styles'
import DropZone from '../../components/DropZone'
import Button from '../../components/StepButton'
import Dots from '../../components/Dots'
import BackButton from '../../components/BackButton'

@withRouter
@connect(
  state => ({ account: state.account.account }),
  dispatch => ({ changeAccount: bindActionCreators(changeAccount, dispatch) })
)
export default class ProfileFormStepFor extends PureComponent {
  state = {
    init: false,
    files: [],
    errors: []
  }

  static getDerivedStateFromProps (props, state) {
    if (props.account && !state.init) {
      const { account } = props

      return {
        init: true,
        files: account.files
      }
    }
    return null
  }

  change = (name) => (value) => {
    this.setState({
      [name]: value,
      errors: this.state.errors.filter(item => item !== name)
    })
  }

  send = () => {
    const { state } = this
    const errors = []
    // if (!state.files.length) errors.push('files')

    if (!errors.length) {
      const data = {
        files: state.files
      }

      this.props.history.push('/profile')
      this.props.changeAccount(data)
    } else {
      this.setState({ errors })
    }
  }

  render () {
    return (
      <Fragment>
        <Container>
          <DropZone onChange={this.change('files')} files={this.state.files} />
        </Container>
        <ButtonWrapper>
          <BackButton to='/profile/form/step/2' />
          <Button handle={this.send}>
            <span>Отправить</span>
            <img src='/img/form-check.svg' />
          </Button>
          <AppTerms>
            Нажимая «Отправить» вы датете согласе<br />на обоработку персональных данных
          </AppTerms>
        </ButtonWrapper>
        <Dots active={3} />
      </Fragment>
    )
  }
}
