import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cuatro from '../../assets/img/ImgErgonometria/cuatro.jpeg'
import cuatro02 from '../../assets/img/ImgErgonometria/cuatro02.png'

class TemaCuatroView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Ergonometría Digítal</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12">
              <h2 className="animated fadeInDown">
                <b>Visión</b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="8">
              <Row className="centrado-fila">
                <Col xs="6">
                  <p>
                    Proteje tus ojos ajustando la luz de la pantalla de acuerdo
                    a la luz natural o bien usa lentes para computadora.
                  </p>
                </Col>
                <Col xs="6">
                  <p>
                    Para descansar la vista : <br />
                    Observa cada 20 minutos un objeto a una distancia de 6
                    metros por 20 segundos.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs="4" className="centrado-fila">
              <img
                src={cuatro}
                style={{ width: 350 }}
                alt="cuatro"
                className="img-fluid bordeImagen  animated fadeInUpBig delay-2s  "
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <h2 className="animated fadeInDown">
                <b>Audición</b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4" className="centrado-fila">
              <img
                src={cuatro02}
                style={{ width: 350 }}
                alt="cuatro02"
                className="img-fluid bordeImagen  animated fadeInUpBig delay-2s  "
              />
            </Col>
            <Col xs="8">
              <Row className="centrado-fila">
                <Col xs="6">
                  <p>
                    Usa de forma inteligente los audifonos o bocinas a un máximo
                    del 60% de su capacidad.
                  </p>
                </Col>
                <Col xs="6">
                  <p>
                    De esta forma podras disfrutar de tu música sin aislarte y
                    sobre todo sin dañar tu audición.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCuatroView
