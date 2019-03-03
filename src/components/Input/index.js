import React, { PureComponent } from 'react'
import { Container, Name, WrapperElements, Input as InputElement } from './styles'

export default class Input extends PureComponent {
  state = {
    value: ''
  }

  change = (e) => this.setState({ value: e.target.value })

  render () {
    const { name, mask, small } = this.props

    return (
      <Container small={small}>
        <InputElement
          mask={mask}
          onChange={this.change}
        />
        <Name isset={!!this.state.value}>{name}</Name>
      </Container>
    )
  }
}

export const Wrapper = WrapperElements
