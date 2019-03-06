import React, { PureComponent } from 'react'
import { Container, Name, Text } from './styles'

export default class Textarea extends PureComponent {
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
    const { name, defaultValue, error } = this.props
    return (
      <Container error={error}>
        <Text onChange={this.change} defaultValue={defaultValue} />
        <Name isset={!!this.state.value}>{name}</Name>
      </Container>
    )
  }
}
