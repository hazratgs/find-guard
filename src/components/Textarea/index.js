import React, { PureComponent } from 'react'
import { Container, Name, Text } from './styles'

export default class Textarea extends PureComponent {
  state = {
    value: ''
  }

  change = (e) => this.setState({ value: e.target.value })

  render () {
    const { name, text } = this.props
    return (
      <Container>
        <Text onChange={this.change}>{text}</Text>
        <Name isset={!!this.state.value}>{name}</Name>
      </Container>
    )
  }
}
