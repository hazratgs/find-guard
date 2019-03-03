import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route } from 'react-router-dom'
import withEvents from '../../utils/withEvents'
import FirstScreen from '../../containers/FirstScreen'

import Register from '../../containers/Register'

@withRouter
@withEvents
@connect()
export default class Main extends PureComponent {
  render () {
    return (
      <Fragment>
        <Switch>
          <Route path='/main/register' exact component={Register} />
        </Switch>
        <FirstScreen />
      </Fragment>
    )
  }
}
