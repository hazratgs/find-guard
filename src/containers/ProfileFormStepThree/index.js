import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { changeAccount } from '../../actions/account'
import { Container, ButtonWrapper } from './styles'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/StepButton'
import Dots from '../../components/Dots'
import Textarea from '../../components/Textarea'
import BackButton from '../../components/BackButton'

@withRouter
@connect(
  state => ({ account: state.account.account }),
  dispatch => ({ changeAccount: bindActionCreators(changeAccount, dispatch) })
)
export default class ProfileFormStepThree extends PureComponent {
  state = {
    init: false,
    employment: '',
    schedule: '',
    salary: '',
    about: '',
    errors: []
  }

  static getDerivedStateFromProps (props, state) {
    if (props.account && !state.init) {
      const { account } = props

      return {
        init: true,
        employment: account.employment,
        schedule: account.schedule,
        salary: account.salary,
        about: account.about
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
    if (state.employment === '') errors.push('employment')
    if (state.schedule === '') errors.push('schedule')
    if (state.salary === '') errors.push('salary')
    if (state.about === '') errors.push('about')

    if (!errors.length) {
      const data = {
        employment: state.employment,
        schedule: state.schedule,
        salary: state.salary,
        about: state.about
      }

      this.props.history.push('/profile/form/step/3')
      this.props.changeAccount(data)
    } else {
      this.setState({ errors })
    }
  }

  render () {
    return (
      <Container>
        <Select
          items={[
            { key: '', value: '' },
            { key: 'Полная занятость', value: 'Полная занятость' },
            { key: 'Частичная занятость', value: 'Частичная занятость' },
            { key: 'Проектная/Временная работа', value: 'Проектная/Временная работа' },
            { key: 'Волонтерство', value: 'Волонтерство' },
            { key: 'Стажировка', value: 'Стажировка' }
          ]}
          name='Тип занятости'
          defaultValue={this.state.employment}
          onChange={this.change('employment')}
          error={this.state.errors.includes('employment')}
        />
        <Select
          items={[
            { key: '', value: '' },
            { key: 'Полный день', value: 'Полный день' },
            { key: 'Сменный график', value: 'Сменный график' },
            { key: 'Гибкий график', value: 'Гибкий график' },
            { key: 'Удаленная работа', value: 'Удаленная работа' },
            { key: 'Вахтовый метод', value: 'Вахтовый метод' }
          ]}
          name='Желаемый график'
          defaultValue={this.state.schedule}
          onChange={this.change('schedule')}
          error={this.state.errors.includes('schedule')}
        />
        <Input
          name='Желаемый уровень зарплаты'
          defaultValue={this.state.salary}
          onChange={this.change('salary')}
          error={this.state.errors.includes('salary')}
        />
        <Textarea
          name='Напишите немного о себе'
          defaultValue={this.state.about}
          onChange={this.change('about')}
          error={this.state.errors.includes('about')}
        />
        <ButtonWrapper>
          <BackButton to='/profile/form/step/1' />
          <Button handle={this.send}>
            <span>Продолжить</span>
            <img src='/img/next.svg' />
          </Button>
        </ButtonWrapper>
        <Dots active={2} />
      </Container>
    )
  }
}
