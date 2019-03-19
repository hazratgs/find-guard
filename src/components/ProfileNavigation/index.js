import React, { PureComponent } from 'react'
import { array } from 'prop-types'
import { Container, Wrapper, Logo, NavWrapper, NavItem } from './styles'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ExitButton from '../ExitButton'

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
        <Wrapper>
          <Logo to='/' />
          <NavWrapper>
            {items}
          </NavWrapper>
          <ExitButton />
        </Wrapper>
      </Container>
    )
  }
}
