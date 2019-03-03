import React, { PureComponent } from 'react'
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
      { key: 'Пол', value: 'Мужчина' },
      { key: 'Телефон', value: '+7 916 766 25 32' },
      { key: 'Тип занятости', value: 'Полная занятость' },
      { key: 'Регион проживания', value: 'Москва' },
      { key: 'Электронная почта', value: 'Info@mail.ru' },
      { key: 'Желаемый график', value: '8-18' },
      { key: 'Желаемый регион работы', value: 'Москва' },
      { key: 'Разрешение на оружие', value: 'АГ 33542' },
      { key: 'Желаемый уровень зарплаты', value: '120 000 рублей' },
      { key: 'Дата рождения', value: '10.06 1984' },
      { key: 'Водительские права', value: 'Да' },
      { key: '', value: '' },
      { key: 'Профессиональная область', value: 'Персональный охранник' },
      { key: 'Опыт работы в сфере (лет)', value: '5 лет 2 мес' }
    ]
  }

  render () {
    const items = this.state.about.map((item, i) => (
      <AboutItem key={i}>
        <Small>{item.key}</Small>
        <strong>{item.value}</strong>
      </AboutItem>
    ))

    return (
      <Container>
        <BreadCrumbs items={this.state.breadcrumbs}/>
        <Title>Еремеев Илья Викторович</Title>
        <ReadButton to='/profile/form'>
          <img src='/img/read.svg'/>
          Редактировать данные
        </ReadButton>
        <About>
          {items}
        </About>
        <Text>
          <Small>Напишите немного о себе</Small>
          <p>Понятие «сопроводительное письмо» совсем недавно вошло в повседневную жизнь в связи с развитием интернет-технологий. Обычно это короткие письма, которые сопровождают основной документ и содержат дополнительную информацию для получателя. Под руководством опытного HR-менеджера мы разобрались, какие правила для таких писем существуют в бизнес-среде.</p>
        </Text>
        <Small>Прикрепленные файлы</Small>
        <Docs>
          <DocsItem>Резюме.doc (127 кб)</DocsItem>
          <DocsItem>Скан_паспорта.zip (2,6 мб)</DocsItem>
        </Docs>
      </Container>
    )
  }
}
