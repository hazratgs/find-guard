import React, { PureComponent } from 'react'
import { Container, Name, WrapperElements, Input as InputElement } from './styles'

export default class Input extends PureComponent {
  state = {
    value: ''
  }

  change = (e) => this.setState({ value: e.target.value })

  render () {
    const { name } = this.props

    return (
      <Container>
        <InputElement onChange={this.change}/>
        <Name isset={!!this.state.value}>{name}</Name>
      </Container>
    )
  }
}

export const Wrapper = WrapperElements
