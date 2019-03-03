import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import withEvents from '../../utils/withEvents'
import FirstScreen from '../../containers/FirstScreen'

@withEvents
@connect()
export default class Main extends PureComponent {
  render () {
    return (
      <Fragment>
        <FirstScreen />
      </Fragment>
    )
  }
}
