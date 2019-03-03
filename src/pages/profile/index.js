import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route } from 'react-router-dom'
import { Container, Content } from './styles'

import ProfileNavigation from '../../components/ProfileNavigation'
import ProfileForm from '../../containers/ProfileForm'
import ProfilePage from '../../containers/ProfilePage'

@withRouter
@connect()
export default class Profile extends PureComponent {
  render () {
    return (
      <Container>
        <ProfileNavigation />
        <Content>
          <Switch>
            <Route path='/profile' exact component={ProfilePage} />
            <Route path='/profile/form' component={ProfileForm} />
          </Switch>
        </Content>
      </Container>
    )
  }
}
