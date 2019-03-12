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
            Header: 'ФИО',
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
            Header: 'Опыт работы в сфере (лет)',
            accessor: 'experienceYears',
            Cell: (props) => {
              const items = {
                0: 'Нет опыта',
                1: 'От 1 года до 3 лет',
                3: 'От 3 до 6 лет',
                6: 'Более 6 лет'
              }
              return items[props.value]
            }
          },
          {
            Header: 'Тип занятости',
            accessor: 'employmentType',
            Cell: (props) => {
              const items = {
                FULL: 'Полная занятость',
                PARTIAL: 'Частичная занятость',
                PROJECT: 'Проектная/Временная работа',
                VOLUNTEERING: 'Волонтерство',
                INTERNSHIP: 'Стажировка'
              }
              return items[props.value]
            }
          },
          {
            Header: 'Желаемый график',
            accessor: 'workSchedule',
            Cell: (props) => {
              const items = {
                FULL_TIME: 'Полный день',
                SHIFT_WORK: 'Сменный график',
                FLEXIBLE_SCHEDULE: 'Гибкий график',
                REMOTE_WORK: 'Удаленная работа',
                TOUR: 'Вахтовый метод'
              }
              return items[props.value]
            }
          },
          {
            Header: 'Желаемый уровень зарплаты',
            accessor: 'desiredSalary'
          },
          {
            Header: 'Напишите немного о себе',
            accessor: 'comment'
          },
          // {
          //   Header: 'CV',
          //   accessor: 'cvPath'
          // },
          {
            Header: 'Регион проживания',
            accessor: 'regionName'
          },
          {
            Header: 'Желаемый регион работы',
            accessor: 'workRegionName'
          },
          {
            Header: 'Действия',
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
