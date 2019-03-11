import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRegion } from '../../actions/regions'
import BreadCrumbs from '../../components/BreadCrumbs'
import { Container, Title, Form, Label } from './styles'
import Input from '../../components/Input'
import Button from '../../components/StepButton'

@withRouter
@connect(
  null,
  dispatch => ({ addRegion: bindActionCreators(addRegion, dispatch) })
)
export default class RegionForm extends PureComponent {
  state = {
    name: '',
    availableForWork: false,
    acceptableForLiving: false,
    errors: [],
    breadcrumbs: [
      {
        name: 'Главная',
        to: '/'
      },
      {
        name: 'Добавить регион',
        to: '/profile/user-list'
      }
    ]
  }

  change = (name) => (value) => {
    this.setState({
      [name]: value,
      errors: this.state.errors.filter(item => item !== name)
    })
  }

  send = () => {
    const errors = []
    if (this.state.name === '') errors.push('name')

    if (errors.length) {
      this.setState({ errors })
    } else {
      const { acceptableForLiving, availableForWork, name } = this.state
      this.props.addRegion({
        acceptableForLiving,
        availableForWork,
        name
      })
    }
  }

  render () {
    return (
      <Container>
        <BreadCrumbs items={this.state.breadcrumbs}/>
        <Title>Добавить регион</Title>
        <Form>
          <Input
            name='Name'
            defaultValue={this.state.name}
            onChange={this.change('name')}
            error={this.state.errors.includes('name')}
          />
          <Label>
            <input
              type='checkbox'
              onChange={(e) => this.setState({ availableForWork: e.target.checked })}
            />
            <span>Available For Work</span>
          </Label>
          <Label>
            <input
              type='checkbox'
              onChange={(e) => this.setState({ acceptableForLiving: e.target.checked })}
            />
            <span>Acceptable For Living</span>
          </Label>
          <Button handle={this.send}>
            <span>Добавить</span>
            <img src='/img/add.svg'/>
          </Button>
        </Form>
      </Container>
    )
  }
}
