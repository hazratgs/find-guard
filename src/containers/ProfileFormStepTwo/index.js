import React, { PureComponent } from 'react'
import { Container } from './styles'
import Input from '../../components/Input'
import Button from '../../components/StepButton'
import Dots from '../../components/Dots'
import Checkbox from '../../components/Checkbox'

export default class ProfileFormStepTwo extends PureComponent {
  render () {
    return (
      <Container>
        <Input name='Телефон' mask='+7 (999) 999-99-99' />
        <Input name='Электронная почта' />
        <Checkbox text='У вас есть водительские права?' />
        <Input name='Профессиональная область' />
        <Input name='Опыт работы в сфере (лет)' small={true} />
        <Button to='/profile/form/step/2'>
          <span>Продолжить</span>
          <img src='/img/next.svg' />
        </Button>
        <Dots active={1} />
      </Container>
    )
  }
}
