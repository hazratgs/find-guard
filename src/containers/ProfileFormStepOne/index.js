import React, { PureComponent } from 'react'
import { Container } from './styles'
import Input, { Wrapper } from '../../components/Input'
import Button from '../../components/StepButton'
import Dots from '../../components/Dots'

export default class ProfileFormStepOne extends PureComponent {
  render () {
    return (
      <Container>
        <Input name='Фамилия' />
        <Input name='Имя' />
        <Input name='Отчество' />
        <Wrapper>
          <Input name='Укажите ваш пол' />
          <Input name='Дата рождения' />
        </Wrapper>
        <Input name='Регион проживания' />
        <Input name='Желаемый регион работы' />
        <Button>
          <span>Продолжить</span>
          <img src='/img/next.svg' />
        </Button>
        <Dots active={0} />
      </Container>
    )
  }
}
