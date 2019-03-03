import React, { PureComponent } from 'react'
import { Button } from './styles'

export default class StepButton extends PureComponent {
  render () {
    return (
      <Button to={this.props.to}>
        {this.props.children}
      </Button>
    )
  }
}
