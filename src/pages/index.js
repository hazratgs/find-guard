import React, { PureComponent, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { isAuthenticate } from '../actions/account'
import { withRouter, Switch, Route } from 'react-router-dom'

import Main from './main'
import Profile from './profile'
import NotFound from '../containers/NotFound'

@hot(module)
@withRouter
@connect(
  state => ({ }),
  dispatch => ({
    isAuthenticate: bindActionCreators(isAuthenticate, dispatch)
  })
)
export default class Pages extends PureComponent {
  state = {
    reloadServerRender: false
  }

  componentDidMount () {
    // авторизация пользователя по cookies.token
    this.props.isAuthenticate()
  }

  render () {
    return (
      <Fragment>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/main' component={Main} />
          <Route path='/profile' component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    )
  }
}
