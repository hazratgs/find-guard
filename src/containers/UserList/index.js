import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteUser } from '../../actions/users'
import BreadCrumbs from '../../components/BreadCrumbs'
import ReactTable from 'react-table'
import 'xlsx'
import 'file-saverjs'
import TableExport from 'tableexport'
import 'blobjs'
import 'react-table/react-table.css'
import {
  Container,
  Title,
  Button
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

  export = () => {
    const tb = document.createElement('table')
    const tbody = document.createElement('tbody')
    const trHead = document.createElement('tr')
    const tdItems = [
      'ID Пользователя',
      'ФИО',
      'Дата рождения',
      'Пол',
      'Телефон',
      'Водительское удостоверение',
      'Разрешение на работу с оружием',
      'Опыт работы в сфере (лет)',
      'Тип занятости',
      'Желаемый график',
      'Желаемый уровень зарплаты',
      'Напишите немного о себе',
      'Регион проживания',
      'Желаемый регион работы'
    ]
    tdItems.map(item => {
      const td = document.createElement('td')
      td.appendChild(document.createTextNode(item))
      trHead.appendChild(td)
    })
    tbody.appendChild(trHead)
    const keys = [
      'id',
      'middleName',
      'birthDate',
      'sex',
      'phone',
      'driverLicense',
      'gunLicense',
      'experienceYears',
      'employmentType',
      'workSchedule',
      'desiredSalary',
      'comment',
      'regionName',
      'workRegionName'
    ]
    this.props.users.map(item => {
      const tr = document.createElement('tr')
      Object.keys(item).map(key => {
        if (!keys.includes(key)) return null
        let value = item[key]
        if (key === 'sex') value = value === 'MALE' ? 'Мужской' : 'Женский'
        if (key === 'driverLicense') value = value ? 'Да' : 'Нет'
        if (key === 'gunLicense') value = value ? 'Да' : 'Нет'
        if (key === 'experienceYears') {
          const items = {
            0: 'Нет опыта',
            1: 'От 1 года до 3 лет',
            3: 'От 3 до 6 лет',
            6: 'Более 6 лет'
          }
          value = items[value]
        }
        if (key === 'employmentType') {
          const items = {
            FULL: 'Полная занятость',
            PARTIAL: 'Частичная занятость',
            PROJECT: 'Проектная/Временная работа',
            VOLUNTEERING: 'Волонтерство',
            INTERNSHIP: 'Стажировка'
          }
          value = items[value]
        }
        if (key === 'workSchedule') {
          const items = {
            FULL_TIME: 'Полный день',
            SHIFT_WORK: 'Сменный график',
            FLEXIBLE_SCHEDULE: 'Гибкий график',
            REMOTE_WORK: 'Удаленная работа',
            TOUR: 'Вахтовый метод'
          }
          value = items[value]
        }
        const td = document.createElement('td')
        td.appendChild(document.createTextNode(value))
        tr.appendChild(td)
      })
      tbody.appendChild(tr)
    })
    tb.appendChild(tbody)

    TableExport.prototype.charset = 'charset=utf-8'
    const table = TableExport(tb, { exportButtons: false, formats: ['xlsx', 'csv', 'txt'] })
    const XLS = table.CONSTANTS.FORMAT.XLSX
    const exportDataXLS = table.getExportData()[tb.getAttribute('tableexport-key')][XLS]
    table.export2file(exportDataXLS.data, exportDataXLS.mimeType, exportDataXLS.filename, exportDataXLS.fileExtension)
  }

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
            Header: 'Водительские права',
            accessor: 'driverLicense',
            Cell: (props) => props.value ? 'Да' : 'Нет'
          },
          {
            Header: 'Разрешение на работу с оружием',
            accessor: 'gunLicense',
            Cell: (props) => props.value ? 'Да' : 'Нет'
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
        <Title>
          Список пользователей
          <Button onClick={this.export}>Выгрузить</Button>
        </Title>
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
