import React, { PureComponent, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { withRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Main from './main'
import NotFound from '../containers/NotFound'

@hot(module)
@withRouter
@connect()
export default class Pages extends PureComponent {
  state = {
    reloadServerRender: false
  }

  render () {
    return (
      <Fragment>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    )
  }
}
