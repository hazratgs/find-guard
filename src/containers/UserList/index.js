import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteUser } from '../../actions/users'
import BreadCrumbs from '../../components/BreadCrumbs'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {
  Container,
  Title
} from './styles'

@connect(
  state => ({
    users: state.users.data
  }),
  dispath => ({ deleteUser: bindActionCreators(deleteUser, dispath) })
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

  filter = (filter, row) => {
    const value = row[filter.id].toString().toLowerCase()
    return value.indexOf(filter.value.toLowerCase()) !== -1
  }

  delete = id => this.props.deleteUser(id)

  render () {
    const columns = [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'ID Пользователя',
            accessor: 'id'
          },
          {
            Header: 'Фамилия',
            accessor: 'middleName'
          },
          {
            Header: 'Дата рождения',
            accessor: 'birthDate'
          },
          {
            Header: 'Пол',
            accessor: 'sex',
            Cell: (props) => props.value === 'MALE' ? 'Мужской' : 'Женский'
          },
          {
            Header: 'Телефон',
            accessor: 'phone'
          },
          {
            Header: '№ прав',
            accessor: 'driverLicenseNumber'
          },
          {
            Header: '№ лицензии на оружие',
            accessor: 'gunLicenseNumber'
          },
          {
            Header: 'Experience Years',
            accessor: 'experienceYears'
          },
          {
            Header: 'Employment Type',
            accessor: 'employmentType'
          },
          {
            Header: 'Work Schedule',
            accessor: 'workSchedule'
          },
          {
            Header: 'Desired Salary',
            accessor: 'desiredSalary'
          },
          {
            Header: 'Comment',
            accessor: 'comment'
          },
          {
            Header: 'CV',
            accessor: 'cvPath'
          },
          {
            Header: 'Region',
            accessor: 'regionName'
          },
          {
            Header: 'Work Region',
            accessor: 'workRegionName'
          },
          {
            Header: 'Prof Area ',
            accessor: 'profAreaName'
          },
          {
            Header: 'Actions',
            Cell: (props) => (
              <button onClick={() => this.delete(props.original.id)}>Delete</button>
            )
          }
        ]
      }
    ]

    return (
      <Container>
        <BreadCrumbs items={this.state.breadcrumbs}/>
        <Title>Список пользователей</Title>
        <ReactTable
          data={this.props.users}
          columns={columns}
          filterable
          defaultFilterMethod={this.filter}
        />
      </Container>
    )
  }
}
