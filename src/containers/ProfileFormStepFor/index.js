import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { changeAccount, fileUpload, accountRegister, saveAccount } from '../../actions/account'
import { Container, ButtonWrapper, AppTerms, ErrorMessage } from './styles'
import DropZone from '../../components/DropZone'
import Button from '../../components/StepButton'
import Dots from '../../components/Dots'
import BackButton from '../../components/BackButton'

@withRouter
@connect(
  state => ({
    account: state.account.account,
    editAccount: state.account.editAccount,
    errorSaveAccount: state.account.errorSaveAccount
  }),
  dispatch => ({
    changeAccount: bindActionCreators(changeAccount, dispatch),
    fileUpload: bindActionCreators(fileUpload, dispatch),
    accountRegister: bindActionCreators(accountRegister, dispatch),
    saveAccount: bindActionCreators(saveAccount, dispatch)
  })
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

      // this.props.history.push('/profile')
      this.props.changeAccount(data)
      if (this.props.editAccount) {
        this.props.saveAccount()
      } else {
        this.props.accountRegister()
      }
      // this.props.fileUpload(this.state.files)
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
            <span>{!this.props.editAccount ? 'Отправить' : 'Сохранить'}</span>
            <img src='/img/form-check.svg' />
          </Button>
          <AppTerms>
            Нажимая «Отправить» вы даете согласие<br />на обоработку персональных данных
          </AppTerms>
        </ButtonWrapper>
        <Dots active={3} />
        {this.props.errorSaveAccount && (
          <ErrorMessage>Для внесения изменений в профиль требуется активация аккаунта</ErrorMessage>
        )}
      </Fragment>
    )
  }
}
