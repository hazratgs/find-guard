import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import BreadCrumbs from '../../components/BreadCrumbs'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {
  Container,
  Title
} from './styles'

@connect(state => ({
  users: state.users.users
}))
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

  render () {
    const columns = [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Name',
        accessor: 'middleName'
      },
      {
        Header: 'Birth Date',
        accessor: 'birthDate'
      },
      {
        Header: 'Sex',
        accessor: 'sex'
      },
      {
        Header: 'Phone',
        accessor: 'phone'
      },
      {
        Header: 'Driver License',
        accessor: 'driverLicense'
      },
      {
        Header: 'Gun License',
        accessor: 'gunLicense'
      },
      {
        Header: 'Gun License Number',
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
