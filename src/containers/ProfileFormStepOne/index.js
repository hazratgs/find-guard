import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { changeAccount } from '../../actions/account'
import { Container } from './styles'
import Input, { Wrapper } from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/StepButton'
import Dots from '../../components/Dots'

@withRouter
@connect(
  state => ({ account: state.account.account }),
  dispatch => ({ changeAccount: bindActionCreators(changeAccount, dispatch) })
)
export default class ProfileFormStepOne extends PureComponent {
  state = {
    init: false,
    lastName: '',
    firstName: '',
    patronymic: '',
    gender: '',
    dateOfBirth: '',
    regionOfResidence: '',
    desiredRegionOfResidence: '',
    errors: []
  }

  static getDerivedStateFromProps (props, state) {
    if (props.account && !state.init) {
      const { account } = props

      return {
        init: true,
        lastName: account.lastName,
        firstName: account.firstName,
        patronymic: account.patronymic,
        gender: account.gender,
        dateOfBirth: account.dateOfBirth,
        regionOfResidence: account.regionOfResidence,
        desiredRegionOfResidence: account.desiredRegionOfResidence
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
    if (state.lastName === '') errors.push('lastName')
    if (state.firstName === '') errors.push('firstName')
    if (state.patronymic === '') errors.push('patronymic')
    if (state.gender === '') errors.push('gender')
    if (state.dateOfBirth === '') errors.push('dateOfBirth')
    if (state.regionOfResidence === '') errors.push('regionOfResidence')
    if (state.desiredRegionOfResidence === '') errors.push('desiredRegionOfResidence')

    if (!errors.length) {
      const data = {
        lastName: state.lastName,
        firstName: state.firstName,
        patronymic: state.patronymic,
        gender: state.gender,
        dateOfBirth: state.dateOfBirth,
        regionOfResidence: state.regionOfResidence,
        desiredRegionOfResidence: state.desiredRegionOfResidence
      }

      this.props.history.push('/profile/form/step/1')
      this.props.changeAccount(data)
    } else {
      this.setState({ errors })
    }
  }

  render () {
    return (
      <Container>
        <Input
          name='Фамилия'
          defaultValue={this.state.lastName}
          onChange={this.change('lastName')}
          error={this.state.errors.includes('lastName')}
        />
        <Input
          name='Имя'
          defaultValue={this.state.firstName}
          onChange={this.change('firstName')}
          error={this.state.errors.includes('firstName')}
        />
        <Input
          name='Отчество'
          defaultValue={this.state.patronymic}
          onChange={this.change('patronymic')}
          error={this.state.errors.includes('patronymic')}
        />
        <Wrapper>
          <Select
            items={[
              { key: '', value: '' },
              { key: 'Мужской', value: 'Male' },
              { key: 'Женский', value: 'Female' }
            ]}
            name='Укажите ваш пол'
            defaultValue={this.state.gender}
            onChange={this.change('gender')}
            error={this.state.errors.includes('gender')}
          />
          <Input
            name='Дата рождения'
            mask="99.99 9999"
            defaultValue={this.state.dateOfBirth}
            onChange={this.change('dateOfBirth')}
            error={this.state.errors.includes('dateOfBirth')}
          />
        </Wrapper>
        <Select
          items={[
            { key: '', value: '' },
            { key: 'Россия', value: 'Russia' },
            { key: 'Украина', value: 'Ukraine' },
            { key: 'Казахстан', value: 'Kazakhstan' }
          ]}
          name='Регион проживания'
          defaultValue={this.state.regionOfResidence}
          onChange={this.change('regionOfResidence')}
          error={this.state.errors.includes('regionOfResidence')}
        />
        <Select
          items={[
            { key: '', value: '' },
            { key: 'Россия', value: 'Russia' },
            { key: 'Украина', value: 'Ukraine' },
            { key: 'Казахстан', value: 'Kazakhstan' }
          ]}
          name='Желаемый регион работы'
          defaultValue={this.state.desiredRegionOfResidence}
          onChange={this.change('desiredRegionOfResidence')}
          error={this.state.errors.includes('desiredRegionOfResidence')}
        />
        <Button handle={this.send}>
          <span>Продолжить</span>
          <img src='/img/next.svg' />
        </Button>
        <Dots active={0} />
      </Container>
    )
  }
}
