import React, { PureComponent } from 'react'
import { Container, Label } from './styles'

export default class Checkbox extends PureComponent {
  render () {
    return (
      <Container>
        <Label>
          <span>{this.props.text}</span>
          <input type='checkbox' />
          <i />
        </Label>
      </Container>
    )
  }
}
