import React, { PureComponent } from 'react'
import isEmail from 'validator/lib/isEmail'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { changeAccount } from '../../actions/account'
import { Container, ButtonWrapper } from './styles'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/StepButton'
import Dots from '../../components/Dots'
import Checkbox from '../../components/Checkbox'
import BackButton from '../../components/BackButton'

@withRouter
@connect(
  state => ({ account: state.account.account }),
  dispatch => ({ changeAccount: bindActionCreators(changeAccount, dispatch) })
)
export default class ProfileFormStepTwo extends PureComponent {
  state = {
    init: false,
    phone: '',
    email: '',
    driverLicense: false,
    driverLicenseNumber: '',
    gunLicense: false,
    gunLicenseNumber: '',
    professionalArea: '',
    experienceYears: '',
    errors: []
  }

  change = (name) => (value) => {
    this.setState({
      [name]: value,
      errors: this.state.errors.filter(item => item !== name)
    })
  }

  static getDerivedStateFromProps (props, state) {
    if (props.account && !state.init) {
      const { account } = props

      return {
        init: true,
        phone: account.phone,
        email: account.email,
        driverLicense: account.driverLicense,
        driverLicenseNumber: account.driverLicenseNumber,
        gunLicense: account.gunLicense,
        gunLicenseNumber: account.gunLicenseNumber,
        // professionalArea: account.professionalArea,
        experienceYears: account.experienceYears
      }
    }
    return null
  }

  send = () => {
    const { state } = this
    const errors = []
    if (state.phone === '') errors.push('phone')
    if (state.email === '') errors.push('email')
    if (!isEmail(state.email)) errors.push('email')
    if (state.experienceYears === '') errors.push('experienceYears')
    // if (state.driverLicense && state.driverLicenseNumber.replace(/\D+/g, '').length !== 10) errors.push('driverLicenseNumber')
    // if (state.gunLicense && state.gunLicenseNumber.replace(/\D+/g, '').length !== 7) errors.push('gunLicenseNumber')

    if (!errors.length) {
      const data = {
        phone: state.phone,
        email: state.email,
        driverLicense: state.driverLicense,
        driverLicenseNumber: state.driverLicenseNumber,
        gunLicense: state.gunLicense,
        gunLicenseNumber: state.gunLicenseNumber,
        // professionalArea: state.professionalArea,
        experienceYears: state.experienceYears
      }

      this.props.history.push('/profile/form/step/2')
      this.props.changeAccount(data)
    } else {
      this.setState({ errors })
    }
  }

  render () {
    return (
      <Container>
        <Input
          name='Телефон'
          mask='+7 (999) 999-99-99'
          defaultValue={this.state.phone}
          onChange={this.change('phone')}
          error={this.state.errors.includes('phone')}
        />
        <Input
          name='Электронная почта'
          defaultValue={this.state.email}
          onChange={this.change('email')}
          error={this.state.errors.includes('email')}
        />
        <Checkbox
          text='У вас есть водительские права?'
          defaultValue={this.state.driverLicense}
          onChange={this.change('driverLicense')}
        />
        <Checkbox
          text='Разрешение на работу с оружием'
          defaultValue={this.state.gunLicense}
          onChange={this.change('gunLicense')}
        />
        <Select
          items={[
            { key: '', value: '' },
            { key: 'Нет опыта', value: '0' },
            { key: 'От 1 года до 3 лет', value: '1' },
            { key: 'От 3 до 6 лет', value: '3' },
            { key: 'Более 6 лет', value: '6' }
          ]}
          name='Опыт работы в сфере (лет)'
          small={true}
          defaultValue={this.state.experienceYears}
          onChange={this.change('experienceYears')}
          error={this.state.errors.includes('experienceYears')}
        />
        <ButtonWrapper>
          <BackButton to='/profile/form' />
          <Button handle={this.send}>
            <span>Продолжить</span>
            <img src='/img/next.svg' />
          </Button>
        </ButtonWrapper>
        <Dots active={1} />
      </Container>
    )
  }
}
