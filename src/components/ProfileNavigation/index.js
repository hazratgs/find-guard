import React, { PureComponent } from 'react'
import { array } from 'prop-types'
import { Container, Logo, NavWrapper, NavItem } from './styles'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

@withRouter
@connect(state => ({ admin: state.account.admin }))
export default class ProfileNavigation extends PureComponent {
  static propTypes = {
    items: array.isRequired
  }

  render () {
    const items = this.props.items.map((item, i) => {
      if (item.admin && !this.props.admin) return null
      return (
        <NavItem key={i} to={item.to} activeClassName='active' exact>
          <img src={item.icon} />
        </NavItem>
      )
    })

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
