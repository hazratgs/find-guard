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
  state => ({
    account: state.account.account,
    regions: state.regions.data
  }),
  dispatch => ({ changeAccount: bindActionCreators(changeAccount, dispatch) })
)
export default class ProfileFormStepOne extends PureComponent {
  state = {
    init: false,
    lastName: '',
    firstName: '',
    middleName: '',
    sex: '',
    birthDate: '',
    regionId: '',
    workRegionId: '',
    errors: []
  }

  static getDerivedStateFromProps (props, state) {
    if (props.account && !state.init) {
      const { account } = props
      const [ year, month, day ] = account.birthDate.split('-')
      return {
        init: true,
        lastName: account.lastName,
        firstName: account.firstName,
        middleName: account.middleName,
        sex: account.sex,
        birthDate: account.birthDate !== '' ? `${day}.${month} ${year}` : account.birthDate,
        regionId: account.regionId,
        workRegionId: account.workRegionId
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
    if (state.middleName === '') errors.push('middleName')
    if (state.sex === '') errors.push('sex')
    if (state.birthDate === '') errors.push('birthDate')
    if (state.regionId === '') errors.push('regionId')
    if (state.workRegionId === '') errors.push('workRegionId')

    const [ day, month, year ] = state.birthDate.replace(' ', '.').split('.')
    if (!errors.length) {
      const data = {
        lastName: state.lastName,
        firstName: state.firstName,
        middleName: `${state.firstName} ${state.firstName} ${state.middleName}`,
        sex: state.sex,
        birthDate: state.birthDate !== '' ? `${year}-${month}-${day}` : state.birthDate,
        regionId: state.regionId,
        workRegionId: state.workRegionId
      }

      this.props.history.push('/profile/form/step/1')
      this.props.changeAccount(data)
    } else {
      this.setState({ errors })
    }
  }

  render () {
    const regions = this.props.regions.map((item) => ({ key: item.name, value: item.id }))

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
          defaultValue={this.state.middleName}
          onChange={this.change('middleName')}
          error={this.state.errors.includes('middleName')}
        />
        <Wrapper>
          <Select
            items={[
              { key: '', value: '' },
              { key: 'Мужской', value: 'MALE' },
              { key: 'Женский', value: 'FEMALE' }
            ]}
            name='Укажите ваш пол'
            defaultValue={this.state.sex}
            onChange={this.change('sex')}
            error={this.state.errors.includes('sex')}
          />
          <Input
            name='Дата рождения'
            mask="99.99 9999"
            defaultValue={this.state.birthDate}
            onChange={this.change('birthDate')}
            error={this.state.errors.includes('birthDate')}
          />
        </Wrapper>
        <Select
          items={[
            { key: '', value: '' },
            ...regions
          ]}
          name='Регион проживания'
          defaultValue={this.state.regionId}
          onChange={this.change('regionId')}
          error={this.state.errors.includes('regionId')}
        />
        <Select
          items={[
            { key: '', value: '' },
            ...regions
          ]}
          name='Желаемый регион работы'
          defaultValue={this.state.workRegionId}
          onChange={this.change('workRegionId')}
          error={this.state.errors.includes('workRegionId')}
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
