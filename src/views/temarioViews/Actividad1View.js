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
import AuthService from '../../services/AuthService'
import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class Actividad1View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.state = {
      radio1: '',
      radio2: '',
      radio3: '',
      radio4: '',
      radio5: '',
      radio6: '',
      radio7: '',
      radio8: '',
      radio9: '',
      radio10: '',
      id_ccs: this.Auth.getProfile().id_ccs,
      form: 'ErgonometriDigital-1',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state)
      alert('Se guardo la actividad: 1, con id: ' + respuesta[0].id)
    } catch (err) {
      console.log('loggea si hay un error')
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Evaluación: </h2>
            </CardHeader>
            <CardBody className="">
              <p>Lee cuidadosamente y subraya la respuesta correcta. </p>
              <Form>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        1. ¿Por debajo de qué porcentaje del volumen máximo de
                        un dispositivo electrónico debes utilizar audífonos o
                        bocinas?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio1"
                          value="a"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(a) 60%.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio1"
                          value="b"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(b) 43%. </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio1"
                          value="c"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(c) 99%.</Label>
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
                        2. ¿Cada cuánto tiempo debes descansar la vista mientras
                        trabajas con pantallas?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio2"
                          value="a"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>
                          (a) Solo aplica en casos de que te lloren los ojos o
                          duela la cabeza y es por 10 minutos.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio2"
                          value="b"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(b) 40 minutos.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio2"
                          value="c"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>
                          (c) Cada 20 minutos posando la vista en un objeto a
                          distancia.
                        </Label>
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
                        3. ¿Cuándo ves televisión, cuántos centímetros debes
                        alejarte de la pantalla para proteger tu vista?
                      </b>
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="a"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>
                          (a) No importa siempre y cuando no sea menor a 30 cm.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="b"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(b) 130 cm es lo recomendable. </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="c"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>
                          (c) Se recomienda una distancia no menor a 160 cm.
                        </Label>
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
                        4. ¿Por qué se debe de apagar o suspender el uso de
                        dispositivos móviles y pantallas antes de dormir?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio4"
                          value="a"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>
                          (a) Por que puede provocar alteraciones del ritmo
                          circadiano o del sueño.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="b"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>
                          (b) Porque el ruido de los aparatos o las ondas
                          electromagnéticas no son buenas para el cerebro.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="c"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>
                          (c) Porque la luz de los dispositivos le da la señal
                          al cerebro de que todavía debe estar activo.
                        </Label>
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
                        5. ¿Cuál es la distancia mínima indispensable que debes
                        de mantener al usar tu pc?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="a"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(a) 40 centímetros.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="b"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(b) 35 centímetros.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="c"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(c) 30 centímetros.</Label>
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
                        6. ¿Cada cuánto tiempo debes levantarte de tu lugar
                        cuando utilices dispositivos electrónicos para favorecer
                        la circulación?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="a"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(a) 45 minutos.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="b"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(b) 55 minutos.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="c"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(c) 35 minutos.</Label>
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
                        7. ¿A qué distancia debes mantener tu celular cuando lo
                        utilices para proteger tu vista?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="a"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(a) 45 cm.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="b"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(b) 35 cm.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="c"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(c) 55 cm.</Label>
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
                        8. ¿A cuántos metros y por cuánto tiempo debes observar
                        un objeto para descansar la vista?{' '}
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="a"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(a) 3 metros por 10 segundos.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="b"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(b) 6 metros por 20 segundos.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio3"
                          value="c"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(c) 9 metros por 40 segundos.</Label>
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
                        9. ¿Qué consecuencias puede tener una mala postura al
                        usar dispositivos digitales?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio9"
                          value="a"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>
                          (a) Deformaciones del cuello o columna, problemas de
                          articulaciones y tendones.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio9"
                          value="b"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>(b) Ceguera.</Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio9"
                          value="c"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>
                          (c) Dolores de cabeza, fatiga y bajo desempeño social.
                        </Label>
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
                        10. ¿Por qué es importante no usar dispositivos como el
                        celular o audífonos mientras nos desplazamos”?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio10"
                          value="a"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>
                          (a) Hacer uso de ellos mientras estamos en movimiento
                          propicia a una pérdida de noción del tiempo.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio10"
                          value="b"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>
                          (b) Para evitar posibles accidentes a nuestra persona
                          o a quienes nos rodean por estar completamente
                          aislados de algún sentido.
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Input
                          type="radio"
                          name="radio10"
                          value="c"
                          onChange={this.onChange.bind(this)}
                        />
                        <Label check>
                          (c) Por que nos dañamos la vista o el oído.
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
                      onClick={this.onSave.bind(this)}
                    >
                      Enviar
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
              {/* <p>{JSON.stringify(this.state)}</p> */}
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Actividad1View
