import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import uno from '../../assets/img/ImgErgonometria/uno.png'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Ergonometría Digítal</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <h2 className="animated zoomInUp delay-1s">
                <b>Era Digital</b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="12" sm="12" md="8" className="animated zoomInUp delay-2s">
              <p className="text-justify">
                Estamos actualmente viviendo una era en la que los dispositivo
                electronicos son sino bien indispensables en nuestras rutinas,
                Si por lo menos muy solicitados.
              </p>
              <p>Por lo que es importante seguir algunas recomendaciones...</p>
            </Col>
            <Col xs="12" sm="12" md="4"  className="centrado-fila">
              <img
                src={uno}
                style={{ width: 300 }}
                alt="uno"
                className="img-fluid bordeImagen  animated  fadeInDown  delay-1s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
