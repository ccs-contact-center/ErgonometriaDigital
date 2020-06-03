import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,

  Input,
} from 'reactstrap'
//import SweetAlert from 'sweetalert2-react'

class Actividad1View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2>Evaluación: </h2>
            </CardHeader>
            <CardBody className="">
              <p>
                De acuerdo al tipo de cliente, llena el paréntesis de la
                recomendación de manera de atenderle.
              </p>
              <Form>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>1.- ¿Qué es la empatía?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="text"
                          name="respuesta1"
                          id="respuesta1"
                          placeholder="Tu respuesta"
                        />
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
                      <b>2.- ¿Cuales son las tipos de empatia que existen?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="text"
                          name="respuesta2"
                          id="respuesta2"
                          placeholder="Tu respuesta"
                        />
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
                      <b>3.- ¿Por que es importante ser empáticos?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="text"
                          name="respuesta3"
                          id="respuesta3"
                          placeholder="Tu respuesta"
                        />
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
                        4.- ¿Cuales son los rasgos mas importantes de una
                        persona empatica?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="text"
                          name="respuesta4"
                          id="respuesta4"
                          placeholder="Tu respuesta"
                        />
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
                        5.- Menciona tres acciones con las cuáles puedes mejorar
                        tu empatía.
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="text"
                          name="respuesta5"
                          id="respuesta5"
                          placeholder="Tu respuesta"
                        />
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
                        6.- ¿Cuales son los 3 obstaculos mas frecuentes en la
                        empatia?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="text"
                          name="respuesta6"
                          id="respuesta6"
                          placeholder="Tu respuesta"
                        />
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
                      <b>8. ¿Por qué es importante la voz en tu trabajo?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="text"
                          name="text"
                          id="respuesta"
                          placeholder="Tu respuesta"
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <br />

                <FormGroup check row>
                  <Col className="centrado-fila">
                    <Button
                      color="primary"
                     
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
export default Actividad1View
