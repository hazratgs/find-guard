import React, { PureComponent } from 'react'
import { Container, Label } from './styles'

export default class Checkbox extends PureComponent {
  change = (e) => {
    this.props.onChange(e.target.checked)
  }

  render () {
    return (
      <Container>
        <Label>
          <span>{this.props.text}</span>
          <input
            onChange={this.change}
            type='checkbox'
            defaultChecked={this.props.defaultValue}
          />
          <i />
        </Label>
      </Container>
    )
  }
}
