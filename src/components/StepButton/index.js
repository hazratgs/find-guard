import React, { PureComponent } from 'react'
import { Button } from './styles'

export default class StepButton extends PureComponent {
  render () {
    return (
      <Button onClick={this.props.handle}>
        {this.props.children}
      </Button>
    )
  }
}
