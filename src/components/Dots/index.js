import React, { PureComponent } from 'react'
import { array, number } from 'prop-types'
import { Container, Item } from './styles'

export default class Dots extends PureComponent {
  static propTypes = {
    items: array.isRequired,
    active: number.isRequired
  }

  static defaultProps = {
    items: [0, 1, 2, 3]
  }

  render () {
    const items = this.props.items.map((item, i) =>
      <Item active={this.props.active === i} />
    )
    return (
      <Container>
        {items}
      </Container>
    )
  }
}
