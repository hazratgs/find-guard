import React, { PureComponent } from 'react'
import { Container, Label } from './styles'
import Input from '../Input'

export default class Checkbox extends PureComponent {
  static getDerivedStateFromProps (props, state) {
    if (!state.checked && props.defaultValue && props.defaultValueInput) {
      return {
        checked: props.defaultValue,
        value: props.defaultValueInput
      }
    }
    return null
  }

  state = {
    checked: false,
    value: ''
  }

  change = (e) => {
    this.setState({ checked: e.target.checked })
    this.props.onChange(e.target.checked)
  }

  changeInput = (value) => {
    this.setState({ value: value })
    this.props.changeInput(value)
  }

  render () {
    return (
      <Container checked={this.state.checked}>
        {this.state.checked && (
          <Input
            name={this.props.placeholder}
            mask={this.props.mask}
            defaultValue={this.state.value}
            onChange={this.changeInput}
            error={this.props.error}
          />
        )}
        <Label checked={this.state.checked}>
          {!this.state.checked && (
            <span>{this.props.text}</span>
          )}
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
