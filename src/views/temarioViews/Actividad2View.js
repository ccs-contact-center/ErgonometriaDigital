import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import SweetAlert from 'sweetalert2-react'

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div className="animated fadeIn">
        <SweetAlert
          show={this.state.show}
          title="Enviado"
          text="Respuestas enviadas...."
          onConfirm={() => this.setState({ show: false })}
        />
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Evaluación: </h2>
            </CardHeader>
            <CardBody className="">
              <p>Lee atentamente y selecciona la respuesta correcta. </p>
              <Form>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>1. ¿Qué es etiqueta telefónica?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio1" />
                        <Label check>(a) En un familiar .</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio2" />
                        <Label check>(b) En nosotros mismos. </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio3" />
                        <Label check>(c) En algún amigo.</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        2. ¿Crees que el ladrón de problemas sea un buen método
                        para priorizar problemas?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>(a) Si.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>(b) No.</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        3. ¿Si el problema es urgente y puedes intervenir en él,
                        se tiene que…?{' '}
                      </b>
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>
                          (a) Resolver en cualquier otro momento.{' '}
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>
                          (b) Resolver lo más pronto posible.{' '}
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>(c) No resolverlo.</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        {' '}
                        4. Dentro de un problema urgente existen 2 vertientes
                        ¿Cuáles son?{' '}
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>
                          (a) Los que provoca la propia persona.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>(b) Los no urgentes.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>(c) Los que son por causa externa.</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b> 5. ¿Cuál es la misión de El ladrón de problemas?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input type="radio" name="radio4" />
                        <Label check>
                          (a) Ayudarnos a desaparecer problemas.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio5" />
                        <Label check>
                          (b) Ayudarnos a priorizar problemas.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input type="radio" name="radio6" />
                        <Label check>
                          (c) Ayudarnos a tener mas problemas.
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <br />

                <FormGroup check row>
                  <Col className="centrado-fila">
                    <Button
                      color="primary"
                      onClick={() => this.setState({ show: true })}
                    >
                      Enviar
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ActividadView
