import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route } from 'react-router-dom'
import withEvents from '../../utils/withEvents'
import FirstScreen from '../../containers/FirstScreen'

import Register from '../../containers/Register'
import Auth from '../../containers/Auth'
import ForgotPassword from '../../containers/ForgotPassword'

@withRouter
@withEvents
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
