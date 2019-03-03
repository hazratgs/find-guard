import React, { PureComponent } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Container, Title, Description } from './styles'
import BreadCrumbs from '../../components/BreadCrumbs'
import ProfileFormStepOne from '../ProfileFormStepOne'
import ProfileFormStepTwo from '../ProfileFormStepTwo'
import ProfileFormStepThree from '../ProfileFormStepThree'
import ProfileFormStepFor from '../ProfileFormStepFor'

@withRouter
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
    const description = this.props.location.pathname.indexOf('step/3') !== -1
      ? 'Осталось совсем немного, загрузите свое резюме, скан документов указанныйх<br/>при заполнении формы (права, разрешение на оружие), а так же скан паспорта'
      : 'Необходимо заполнить все поля'

    return (
      <Container>
        <BreadCrumbs items={this.state.breadcrumbs}/>
        <Title>Заполните анкету</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <Switch>
          <Route path='/profile/form' exact component={ProfileFormStepOne}/>
          <Route path='/profile/form/step/1' exact component={ProfileFormStepTwo}/>
          <Route path='/profile/form/step/2' exact component={ProfileFormStepThree}/>
          <Route path='/profile/form/step/3' exact component={ProfileFormStepFor}/>
        </Switch>
      </Container>
    )
  }
}
