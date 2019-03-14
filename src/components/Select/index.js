import React, { PureComponent } from 'react'
import { Container, Name, SelectElement } from './styles'

export default class Select extends PureComponent {
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
    const items = this.props.items.map((item, i) => (
      <option key={i} value={item.value} disabled={!item.value}>{item.key}</option>
    ))

    return (
      <Container small={small} error={error}>
        <SelectElement
          mask={mask}
          onChange={this.change}
          defaultValue={defaultValue}
        >
          {items}
        </SelectElement>
        <Name isset={!!this.state.value}>{name}</Name>
      </Container>
    )
  }
}
