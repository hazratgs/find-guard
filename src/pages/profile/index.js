import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route } from 'react-router-dom'
import { Container, Content } from './styles'

import ProfileNavigation from '../../components/ProfileNavigation'
import ProfileForm from '../../containers/ProfileForm'
import ProfilePage from '../../containers/ProfilePage'
import UserList from '../../containers/UserList'

@withRouter
@connect()
export default class Profile extends PureComponent {
  state = {
    routes: [
      { to: '/profile', icon: '/img/user.svg' },
      { to: '/profile/user-list', icon: '/img/user-list.svg', admin: true }
    ]
  }

  render () {
    return (
      <Container>
        <ProfileNavigation items={this.state.routes}/>
        <Content>
          <Switch>
            <Route path='/profile' exact component={ProfilePage} />
            <Route path='/profile/form' component={ProfileForm} />
            <Route path='/profile/user-list' component={UserList} />
          </Switch>
        </Content>
      </Container>
    )
  }
}
