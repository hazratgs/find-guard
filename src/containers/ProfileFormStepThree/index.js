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
    employmentType: 'FULL',
    workSchedule: '',
    desiredSalary: '',
    comment: '',
    errors: []
  }

  static getDerivedStateFromProps (props, state) {
    if (props.account && !state.init) {
      const { account } = props

      return {
        init: true,
        employmentType: account.employmentType,
        workSchedule: account.workSchedule,
        desiredSalary: account.desiredSalary,
        comment: account.comment
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
    if (state.employmentType === '') errors.push('employmentType')
    if (state.workSchedule === '') errors.push('workSchedule')
    if (state.desiredSalary === '') errors.push('desiredSalary')
    if (state.comment === '') errors.push('comment')

    if (!errors.length) {
      const data = {
        employmentType: state.employmentType,
        workSchedule: state.workSchedule,
        desiredSalary: state.desiredSalary,
        comment: state.comment
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
            { key: 'Полная занятость', value: 'FULL' },
            { key: 'Частичная занятость', value: 'PARTIAL' },
            { key: 'Проектная/Временная работа', value: 'PROJECT' },
            { key: 'Волонтерство', value: 'VOLUNTEERING' },
            { key: 'Стажировка', value: 'INTERNSHIP' }
          ]}
          name='Тип занятости'
          defaultValue={this.state.employmentType}
          onChange={this.change('employmentType')}
          error={this.state.errors.includes('employmentType')}
        />
        <Select
          items={[
            { key: '', value: '' },
            { key: 'Полный день', value: 'FULL_TIME' },
            { key: 'Сменный график', value: 'SHIFT_WORK' },
            { key: 'Гибкий график', value: 'FLEXIBLE_SCHEDULE' },
            { key: 'Удаленная работа', value: 'REMOTE_WORK' },
            { key: 'Вахтовый метод', value: 'TOUR' }
          ]}
          name='Желаемый график'
          defaultValue={this.state.workSchedule}
          onChange={this.change('workSchedule')}
          error={this.state.errors.includes('workSchedule')}
        />
        <Input
          name='Желаемый уровень зарплаты'
          defaultValue={this.state.desiredSalary}
          onChange={this.change('desiredSalary')}
          error={this.state.errors.includes('desiredSalary')}
        />
        <Textarea
          name='Напишите немного о себе'
          defaultValue={this.state.comment}
          onChange={this.change('comment')}
          error={this.state.errors.includes('comment')}
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
