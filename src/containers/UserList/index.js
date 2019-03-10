import React, { PureComponent } from 'react'
import {
  Container,
  Title
} from './styles'
import BreadCrumbs from '../../components/BreadCrumbs'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

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

  render () {
    const data = [
      {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23
        }
      }
    ]

    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span>
      },
      {
        id: 'friendName',
        Header: 'Friend Name',
        accessor: d => d.friend.name
      },
      {
        Header: props => <span>Friend Age</span>,
        accessor: 'friend.age'
      }
    ]
    return (
      <Container>
        <BreadCrumbs items={this.state.breadcrumbs}/>
        <Title>Список пользователей</Title>
        <ReactTable
          data={data}
          columns={columns}
        />
      </Container>
    )
  }
}
