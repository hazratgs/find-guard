import React, { PureComponent } from 'react'
import { Button } from './styles'

export default class BackButton extends PureComponent {
  render () {
    return (
      <Button to={this.props.to}>
        <img src='/img/back-button.svg' />
      </Button>
    )
  }
}
