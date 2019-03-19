import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editAccount } from '../../actions/account'
import { withRouter } from 'react-router-dom'
import {
  Container,
  Title,
  Small,
  ReadButton,
  About,
  AboutItem,
  Text,
  Docs,
  DocsItem
} from './styles'
import BreadCrumbs from '../../components/BreadCrumbs'
import Notif from '../../components/Notif'

@withRouter
@connect(
  state => ({
    account: state.account.account,
    regions: state.regions.data
  }),
  dispatch => ({
    editAccount: bindActionCreators(editAccount, dispatch)
  })
)
export default class ProfilePage extends PureComponent {
  state = {
    breadcrumbs: [
      {
        name: 'Главная',
        to: '/'
      },
      {
        name: 'Личный кабинет',
        to: '/profile'
      }
    ],
    about: [
      { key: 'Пол', value: '' },
      { key: 'Телефон', value: '' },
      { key: 'Тип занятости', value: '' },
      { key: 'Регион проживания', value: '' },
      { key: 'Электронная почта', value: '' },
      { key: 'Желаемый график', value: '' },
      { key: 'Желаемый регион работы', value: '' },
      { key: 'Разрешение на работу с оружием', value: '' },
      { key: 'Желаемый уровень зарплаты', value: '' },
      { key: 'Дата рождения', value: '' },
      { key: 'Водительские права', value: '' },
      { key: '', value: '' },
      { key: 'Опыт работы в сфере (лет)', value: '' }
    ]
  }

  static getDerivedStateFromProps (props) {
    if (props.account) {
      const { account } = props
      return {
        about: [
          { key: 'Пол', value: account.sex },
          { key: 'Телефон', value: account.phone },
          { key: 'Тип занятости', value: account.employmentType },
          { key: 'Регион проживания', value: account.regionId },
          { key: 'Электронная почта', value: account.email },
          { key: 'Желаемый график', value: account.workSchedule },
          { key: 'Желаемый регион работы', value: account.workRegionId },
          { key: 'Разрешение на работу с оружием', value: account.gunLicense },
          { key: 'Желаемый уровень зарплаты', value: account.desiredSalary },
          { key: 'Дата рождения', value: account.birthDate },
          { key: 'Водительские права', value: account.driverLicense },
          { key: '', value: '' },
          { key: 'Опыт работы в сфере (лет)', value: account.experienceYears }
        ]
      }
    }
    return null
  }

  normalize = (key, value) => {
    const regions = this.props.regions.map((item) => ({ key: item.name, value: item.id }))
    if (key === 'Регион проживания' || key === 'Желаемый регион работы') {
      const [find] = regions.filter(item => item.value === parseInt(value))
      if (find) return find.key
    }
    if (key === 'Пол') return value === '' ? '' : value ? 'Мужской' : 'Женский'
    if (key === 'Опыт работы в сфере (лет)') {
      const items = {
        0: 'Нет опыта',
        1: 'От 1 года до 3 лет',
        3: 'От 3 до 6 лет',
        6: 'Более 6 лет'
      }
      return items[value]
    }
    if (key === 'Тип занятости') {
      const items = {
        FULL: 'Полная занятость',
        PARTIAL: 'Частичная занятость',
        PROJECT: 'Проектная/Временная работа',
        VOLUNTEERING: 'Волонтерство',
        INTERNSHIP: 'Стажировка'
      }
      return items[value]
    }
    if (key === 'Желаемый график') {
      const items = {
        FULL_TIME: 'Полный день',
        SHIFT_WORK: 'Сменный график',
        FLEXIBLE_SCHEDULE: 'Гибкий график',
        REMOTE_WORK: 'Удаленная работа',
        TOUR: 'Вахтовый метод'
      }
      return items[value]
    }
    if (key === 'Разрешение на работу с оружием') return value ? 'Да' : 'Нет'
    if (key === 'Водительские права') return value ? 'Да' : 'Нет'
    return value
  }

  edit = () => this.props.editAccount()

  render () {
    console.log('props', this.props)
    const { account } = this.props
    const items = this.state.about.map((item, i) => (
      <AboutItem key={i}>
        <Small>{item.key}</Small>
        <strong>{this.normalize(item.key, item.value)}</strong>
      </AboutItem>
    ))

    const docs = account.files.map((item, i) => (
      <DocsItem key={i}>{item.name} ({(item.size / 1024).toFixed(2)} кб)</DocsItem>
    ))

    return (
      <Container>
        <BreadCrumbs items={this.state.breadcrumbs}/>
        <Notif />
        <Title>{account.middleName}</Title>
        <ReadButton
          to='/profile/form'
          onClick={this.edit}
        >
          <img src='/img/read.svg'/>
          Редактировать данные
        </ReadButton>
        <About>
          {items}
        </About>
        <Text>
          <Small>Напишите немного о себе</Small>
          <p>{account.comment}</p>
        </Text>
        <Small>Прикрепленные файлы</Small>
        <Docs>
          {docs}
        </Docs>
      </Container>
    )
  }
}
