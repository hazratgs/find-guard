import React, { PureComponent } from 'react'
import { Container } from './styles'
import Input from '../../components/Input'
import Button from '../../components/StepButton'
import Dots from '../../components/Dots'
import Textarea from '../../components/Textarea'

export default class ProfileFormStepThree extends PureComponent {
  render () {
    return (
      <Container>
        <Input name='Тип занятости' />
        <Input name='Желаемый график' />
        <Input name='Желаемый уровень зарплаты' />
        <Textarea name='Напишите немного о себе' />
        <Button to='/profile/form/step/3'>
          <span>Продолжить</span>
          <img src='/img/next.svg' />
        </Button>
        <Dots active={2} />
      </Container>
    )
  }
}
