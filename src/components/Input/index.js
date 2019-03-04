import React, { PureComponent } from 'react'
import { Container, Name, WrapperElements, Input as InputElement } from './styles'

export default class Input extends PureComponent {
  state = {
    value: ''
  }

  static getDerivedStateFromProps (props, state) {
    if (state.value === '' && props.defaultValue !== '') {
      return {
        value: props.defaultValue
      }
    }
    return null
  }

  change = (e) => {
    this.setState({ value: e.target.value })
    this.props.onChange(e.target.value)
  }

  render () {
    const { name, mask, small, error, defaultValue } = this.props

    return (
      <Container small={small} error={error}>
        <InputElement
          mask={mask}
          onChange={this.change}
          defaultValue={defaultValue}
        />
        <Name isset={!!this.state.value}>{name}</Name>
      </Container>
    )
  }
}

export const Wrapper = WrapperElements
