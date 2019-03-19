import React, { PureComponent } from 'react'
import { Container, Label } from './styles'

export default class Checkbox extends PureComponent {
  static getDerivedStateFromProps (props, state) {
    if (!state.checked && props.defaultValue) {
      return {
        checked: props.defaultValue
      }
    }
    return null
  }

  state = {
    checked: false
  }

  change = (e) => {
    this.setState({ checked: e.target.checked })
    this.props.onChange(e.target.checked)
  }

  render () {
    return (
      <Container>
        <Label checked={this.state.checked}>
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
