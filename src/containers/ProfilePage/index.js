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

@connect(state => ({ profile: state.profile.profile }))
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
    if (props.profile) {
      const { profile } = props
      return {
        about: [
          { key: 'Пол', value: profile.gender },
          { key: 'Телефон', value: profile.phone },
          { key: 'Тип занятости', value: profile.employment },
          { key: 'Регион проживания', value: profile.regionOfResidence },
          { key: 'Электронная почта', value: profile.email },
          { key: 'Желаемый график', value: profile.schedule },
          { key: 'Желаемый регион работы', value: profile.desiredRegionOfResidence },
          { key: 'Разрешение на оружие', value: '№ ' + profile.weaponNumber },
          { key: 'Желаемый уровень зарплаты', value: profile.salary },
          { key: 'Дата рождения', value: profile.dateOfBirth },
          { key: 'Водительские права', value: '№ ' + profile.driveryLicenseNumber },
          { key: '', value: '' },
          { key: 'Профессиональная область', value: profile.professionalArea },
          { key: 'Опыт работы в сфере (лет)', value: profile.experience }
        ]
      }
    }
    return null
  }

  render () {
    const { profile } = this.props
    console.log(profile)
    const items = this.state.about.map((item, i) => (
      <AboutItem key={i}>
        <Small>{item.key}</Small>
        <strong>{item.value}</strong>
      </AboutItem>
    ))

    const docs = profile.files.map((item, i) => (
      <DocsItem key={i}>{item.name} ({(item.size / 1024).toFixed(2)} кб)</DocsItem>
    ))

    return (
      <Container>
        <BreadCrumbs items={this.state.breadcrumbs}/>
        <Notif />
        <Title>{profile.lastName} {profile.firstName} {profile.patronymic}</Title>
        <ReadButton to='/profile/form'>
          <img src='/img/read.svg'/>
          Редактировать данные
        </ReadButton>
        <About>
          {items}
        </About>
        <Text>
          <Small>Напишите немного о себе</Small>
          <p>{profile.about}</p>
        </Text>
        <Small>Прикрепленные файлы</Small>
        <Docs>
          {docs}
        </Docs>
      </Container>
    )
  }
}
