import React, { PureComponent } from 'react'
import { array } from 'prop-types'
import { Container, Logo, NavWrapper, NavItem } from './styles'

export default class ProfileNavigation extends PureComponent {
  static propTypes = {
    items: array.isRequired
  }

  static defaultProps = {
    items: [
      { to: '/profile', icon: '/img/user.svg', role: 'admin' }
    ]
  }

  render () {
    const items = this.props.items.map((item, i) => (
      <NavItem key={i} to={item.to}>
        <img src={item.icon} />
      </NavItem>
    ))

    return (
      <Container>
        <Logo />
        <NavWrapper>
          {items}
        </NavWrapper>
      </Container>
    )
  }
}
