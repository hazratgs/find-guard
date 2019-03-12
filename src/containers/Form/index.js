import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import {
  Container,
  Popup,
  Close,
  Title,
  Description,
  Form,
  Input,
  Agreement,
  Button,
  NavLink,
  ErrorMessage,
  SuccessMessage,
  Label
} from './styles'

export default class FormWrapper extends PureComponent {
  static propTypes = {
    inputs: propTypes.array.isRequired,
    state: propTypes.object.isRequired,
    send: propTypes.func.isRequired,
    change: propTypes.func.isRequired,
    buttonStatus: propTypes.func.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string,
    agreement: propTypes.array,
    checkbox: propTypes.array,
    button: propTypes.string,
    link: propTypes.string,
    linkPath: propTypes.string,
    errorForm: propTypes.bool,
    successForm: propTypes.bool,
    errorMessage: propTypes.string,
    successMessage: propTypes.string
  }

  render () {
    const items = this.props.inputs.map((item, i) => (
      <Input
        key={i}
        type={item.type}
        name={item.name}
        placeholder={item.placeholder}
        onChange={this.props.change(item.name)}
        error={this.props.state[item.name] !== null && this.props.state.errors.includes(item.name)}
      />
    ))

    return (
      <Container>
        {this.props.errorForm && (
          <ErrorMessage>{this.props.errorMessage}</ErrorMessage>
        )}
        {this.props.successForm && (
          <SuccessMessage>{this.props.successMessage}</SuccessMessage>
        )}
        <Popup>
          <Close to='/' />
          <Title>{this.props.title}</Title>
          {this.props.description && <Description>{this.props.description}</Description>}
          <Form>
            {items}
            {this.props.agreement && (
              <Agreement>
                {this.props.agreement}
              </Agreement>
            )}
            {this.props.checkbox && (
              <Label onChange={(e) => this.props.change('checkbox')({ target: { value: e.target.checked } })}>
                <input type='checkbox' />
                <span>{this.props.checkbox}</span>
              </Label>
            )}
            <Button
              onClick={this.props.send}
              disabled={!this.props.state.buttonStatus}
            >
              {this.props.button}
            </Button>
            {this.props.link && (
              <NavLink to={this.props.linkPath}>{this.props.link}</NavLink>
            )}
          </Form>
        </Popup>
      </Container>
    )
  }
}
