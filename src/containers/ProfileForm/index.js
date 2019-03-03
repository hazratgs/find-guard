import React, { PureComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Title, Description } from './styles'
import BreadCrumbs from '../../components/BreadCrumbs'
import ProfileFormStepOne from '../ProfileFormStepOne'

export default class ProfileForm extends PureComponent {
  state = {
    breadcrumbs: [
      {
        name: 'Главная',
        to: '/'
      },
      {
        name: 'Анкета',
        to: '/profile/form'
      }
    ]
  }

  render () {
    return (
      <Container>
        <BreadCrumbs items={this.state.breadcrumbs}/>
        <Title>Заполните анкету</Title>
        <Description>Необходимо заполнить все поля</Description>
        <Switch>
          <Route path='/profile' exact component={ProfileFormStepOne}/>
        </Switch>
      </Container>
    )
  }
}
