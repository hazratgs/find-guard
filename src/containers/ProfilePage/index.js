import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
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

@connect(state => ({
  account: state.account.account
}))
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
      { key: 'Пол', value: '--' },
      { key: 'Телефон', value: '--' },
      { key: 'Тип занятости', value: '--' },
      { key: 'Регион проживания', value: '--' },
      { key: 'Электронная почта', value: '--' },
      { key: 'Желаемый график', value: '--' },
      { key: 'Желаемый регион работы', value: '--' },
      { key: 'Разрешение на оружие', value: '--' },
      { key: 'Желаемый уровень зарплаты', value: '--' },
      { key: 'Дата рождения', value: '--' },
      { key: 'Водительские права', value: '--' },
      { key: '', value: '' },
      { key: 'Профессиональная область', value: '--' },
      { key: 'Опыт работы в сфере (лет)', value: '--' }
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
          { key: 'Разрешение на оружие', value: '№ ' + account.gunLicenseNumber },
          { key: 'Желаемый уровень зарплаты', value: account.desiredSalary },
          { key: 'Дата рождения', value: account.birthDate },
          { key: 'Водительские права', value: '№ ' + account.driverLicenseNumber },
          { key: '', value: '' },
          { key: 'Профессиональная область', value: account.professionalArea },
          { key: 'Опыт работы в сфере (лет)', value: account.experienceYears }
        ]
      }
    }
    return null
  }

  render () {
    const { account } = this.props
    console.log(account)
    const items = this.state.about.map((item, i) => (
      <AboutItem key={i}>
        <Small>{item.key}</Small>
        <strong>{item.value}</strong>
      </AboutItem>
    ))

    const docs = account.files.map((item, i) => (
      <DocsItem key={i}>{item.name} ({(item.size / 1024).toFixed(2)} кб)</DocsItem>
    ))

    return (
      <Container>
        <BreadCrumbs items={this.state.breadcrumbs}/>
        <Notif />
        <Title>{account.lastName} {account.firstName} {account.middleName}</Title>
        <ReadButton to='/profile/form'>
          <img src='/img/read.svg'/>
          Редактировать данные
        </ReadButton>
        <About>
          {items}
        </About>
        <Text>
          <Small>Напишите немного о себе</Small>
          <p>{account.about}</p>
        </Text>
        <Small>Прикрепленные файлы</Small>
        <Docs>
          {docs}
        </Docs>
      </Container>
    )
  }
}
