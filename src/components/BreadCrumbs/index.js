import React, { PureComponent } from 'react'
import { array } from 'prop-types'
import { Container, Item } from './styles'

export default class BreadCrumbs extends PureComponent {
  static propTypes = {
    items: array.isRequired
  }

  render () {
    const items = this.props.items.map((item, i) =>
      <Item key={i} to={item.to}>{item.name}</Item>
    )

    return (
      <Container>
        {items}
      </Container>
    )
  }
}
