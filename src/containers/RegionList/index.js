import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteRegion } from '../../actions/regions'
import BreadCrumbs from '../../components/BreadCrumbs'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {
  Container,
  Title
} from './styles'

@connect(
  state => ({
    regions: state.regions.data
  }),
  dispath => ({ deleteRegion: bindActionCreators(deleteRegion, dispath) })
)
export default class UserList extends PureComponent {
  state = {
    breadcrumbs: [
      {
        name: 'Главная',
        to: '/'
      },
      {
        name: 'Список пользователей',
        to: '/profile/user-list'
      }
    ]
  }

  filter = (filter, row) => row[filter.id].indexOf(filter.value) !== -1

  delete = id => this.props.deleteRegion(id)

  render () {
    const columns = [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Acceptable For Living',
        accessor: 'acceptableForLiving',
        Cell: (props) => `${props.value}`
      },
      {
        Header: 'Available For Work',
        accessor: 'availableForWork',
        Cell: (props) => `${props.value}`
      },
      {
        Header: 'Actions',
        Cell: (props) => (
          <button onClick={() => this.delete(props.original.id)}>Delete</button>
        )
      }
    ]

    return (
      <Container>
        <BreadCrumbs items={this.state.breadcrumbs}/>
        <Title>Список регионов</Title>
        <ReactTable
          data={this.props.regions}
          columns={columns}
          filterable
          defaultFilterMethod={this.filter}
        />
      </Container>
    )
  }
}
