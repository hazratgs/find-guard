import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Container, Content } from './styles'

import ProfileNavigation from '../../components/ProfileNavigation'
import ProfileForm from '../../containers/ProfileForm'

@withRouter
@connect()
export default class Profile extends PureComponent {
  render () {
    return (
      <Container>
        <ProfileNavigation />
        <Content>
          <ProfileForm />
        </Content>
      </Container>
    )
  }
}
