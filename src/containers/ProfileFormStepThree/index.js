import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { changeProfile } from '../../actions/profile'
import { Container } from './styles'
import Input from '../../components/Input'
import Button from '../../components/StepButton'
import Dots from '../../components/Dots'
import Textarea from '../../components/Textarea'

@withRouter
@connect(
  state => ({ profile: state.profile.profile }),
  dispatch => ({ changeProfile: bindActionCreators(changeProfile, dispatch) })
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
    if (props.profile && !state.init) {
      const { profile } = props

      return {
        init: true,
        employment: profile.employment,
        schedule: profile.schedule,
        salary: profile.salary,
        about: profile.about
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
      this.props.changeProfile(data)
    } else {
      this.setState({ errors })
    }
  }

  render () {
    return (
      <Container>
        <Input
          name='Тип занятости'
          defaultValue={this.state.employment}
          onChange={this.change('employment')}
          error={this.state.errors.includes('employment')}
        />
        <Input
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
        <Button handle={this.send}>
          <span>Продолжить</span>
          <img src='/img/next.svg' />
        </Button>
        <Dots active={2} />
      </Container>
    )
  }
}
