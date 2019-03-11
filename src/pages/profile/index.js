import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route } from 'react-router-dom'
import { Container, Content } from './styles'

import ProfileNavigation from '../../components/ProfileNavigation'
import ProfileForm from '../../containers/ProfileForm'
import ProfilePage from '../../containers/ProfilePage'
import UserList from '../../containers/UserList'
import RegionList from '../../containers/RegionList'
import RegionForm from '../../containers/RegionForm'

@withRouter
@connect()
export default class Profile extends PureComponent {
  state = {
    routes: [
      { to: '/profile', icon: '/img/user.svg' },
      { to: '/profile/user-list', icon: '/img/user-list.svg', admin: true },
      { to: '/profile/region-list', icon: '/img/earth.svg', admin: true }
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
            <Route path='/profile/region-list' component={RegionList} />
            <Route path='/profile/region-form' component={RegionForm} />
          </Switch>
        </Content>
      </Container>
    )
  }
}
