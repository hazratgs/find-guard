import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route } from 'react-router-dom'
import FirstScreen from '../../containers/FirstScreen'

import Register from '../../components/Register'
import Auth from '../../components/Auth'
import ForgotPassword from '../../components/ForgotPassword'

@withRouter
@connect()
export default class Main extends PureComponent {
  render () {
    return (
      <Fragment>
        <Switch>
          <Route path='/main/register' exact component={Register} />
          <Route path='/main/auth' exact component={Auth} />
          <Route path='/main/forgot-password' exact component={ForgotPassword} />
        </Switch>
        <FirstScreen />
      </Fragment>
    )
  }
}
