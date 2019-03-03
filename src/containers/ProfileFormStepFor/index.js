import React, { PureComponent, Fragment } from 'react'
import { Container, ButtonWrapper, AppTerms } from './styles'
import DropZone from '../../components/DropZone'
import Button from '../../components/StepButton'
import Dots from '../../components/Dots'

export default class ProfileFormStepFor extends PureComponent {
  render () {
    return (
      <Fragment>
        <Container>
          <DropZone />
        </Container>
        <ButtonWrapper>
          <Button to='/profile/form/step/3'>
            <span>Отправить</span>
            <img src='/img/form-check.svg' />
          </Button>
          <AppTerms>
            Нажимая «Отправить» вы датете согласе<br />на обоработку персональных данных
          </AppTerms>
        </ButtonWrapper>
        <Dots active={3} />
      </Fragment>
    )
  }
}
