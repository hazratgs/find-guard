import React, { PureComponent } from 'react'
import isEmail from 'validator/lib/isEmail'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { changeProfile } from '../../actions/profile'
import { Container, ButtonWrapper } from './styles'
import Input from '../../components/Input'
import Button from '../../components/StepButton'
import Dots from '../../components/Dots'
import Checkbox from '../../components/Checkbox'
import BackButton from '../../components/BackButton'

@withRouter
@connect(
  state => ({ profile: state.profile.profile }),
  dispatch => ({ changeProfile: bindActionCreators(changeProfile, dispatch) })
)
export default class ProfileFormStepTwo extends PureComponent {
  state = {
    init: false,
    phone: '',
    email: '',
    driveryLicense: false,
    driveryLicenseNumber: '',
    weapon: false,
    weaponNumber: '',
    professionalArea: '',
    experience: '',
    errors: []
  }

  change = (name) => (value) => {
    this.setState({
      [name]: value,
      errors: this.state.errors.filter(item => item !== name)
    })
  }

  static getDerivedStateFromProps (props, state) {
    if (props.profile && !state.init) {
      const { profile } = props

      return {
        init: true,
        phone: profile.phone,
        email: profile.email,
        driveryLicense: profile.driveryLicense,
        driveryLicenseNumber: profile.driveryLicenseNumber,
        weapon: profile.weapon,
        weaponNumber: profile.weaponNumber,
        professionalArea: profile.professionalArea,
        experience: profile.experience
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
    if (state.professionalArea === '') errors.push('professionalArea')
    if (state.experience === '') errors.push('experience')
    if (state.driveryLicense && state.driveryLicenseNumber.replace(/\D+/g, '').length !== 10) errors.push('driveryLicenseNumber')
    if (state.weapon && state.weaponNumber.replace(/\D+/g, '').length !== 7) errors.push('weaponNumber')

    if (!errors.length) {
      const data = {
        phone: state.phone,
        email: state.email,
        driveryLicense: state.driveryLicense,
        driveryLicenseNumber: state.driveryLicenseNumber,
        weapon: state.weapon,
        weaponNumber: state.weaponNumber,
        professionalArea: state.professionalArea,
        experience: state.experience
      }

      this.props.history.push('/profile/form/step/2')
      this.props.changeProfile(data)
    } else {
      this.setState({ errors })
    }
  }

  render () {
    console.log(this.state)
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
          defaultValue={this.state.driveryLicense}
          defaultValueInput={this.state.driveryLicenseNumber}
          mask='99 99 999999'
          placeholder='№ водительского удостоверения'
          onChange={this.change('driveryLicense')}
          changeInput={this.change('driveryLicenseNumber')}
          error={this.state.errors.includes('driveryLicenseNumber')}
        />
        <Checkbox
          text='У вас есть разрешение на оружие?'
          defaultValue={this.state.weapon}
          defaultValueInput={this.state.weaponNumber}
          onChange={this.change('weapon')}
          mask='9999999'
          placeholder='№ разрешения на оружия'
          changeInput={this.change('weaponNumber')}
          error={this.state.errors.includes('weaponNumber')}
        />
        <Input
          name='Профессиональная область'
          defaultValue={this.state.professionalArea}
          onChange={this.change('professionalArea')}
          error={this.state.errors.includes('professionalArea')}
        />
        <Input
          name='Опыт работы в сфере (лет)'
          small={true}
          defaultValue={this.state.experience}
          onChange={this.change('experience')}
          error={this.state.errors.includes('experience')}
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
