import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import tres from '../../assets/img/ImgErgonometria/tres.jpg'
import tres1 from '../../assets/img/ImgErgonometria/tres1.png'

class TemaTresView extends Component {
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
          <Row className="">
            <Col xs="12" className="animated zoomInUp delay-0s">
              <h2>Postura </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="12" sm="6" md="7">
              <p className="animated zoomInUp delay-1s">
                Adopta posturas adecuadas para evitar lesiones en el cuello,
                espalda y articulaciones de acuerdo al dispositivo que se este
                utilizando.
              </p>
            </Col>
            <Col xs="12" sm="6" md="5">
              <img
                src={tres}
                style={{ width: 560 }}
                alt="tres"
                className="img-fluid bordeImagen   animated  fadeInDown  delay-2s"
              />
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="12" sm="6" md="5">
              <img
                src={tres1}
                style={{ width: 300 }}
                alt="tres1"
                className="img-fluid    animated  fadeInDown  delay-3s"
              />
            </Col>
            <Col xs="12" sm="6" md="7">
              <p className="animated zoomInUp delay-4s">
                De igual manera procura no pasar mas de 45 minutos sin moverte
                al usar tus dispositivos digitales.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTresView
