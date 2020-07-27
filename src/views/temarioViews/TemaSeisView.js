import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import seis from '../../assets/img/ImgErgonometria/seis.jpg'

class TemaSeisView extends Component {
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
            <Col xs="12" className="animated zoomInUp delay-1s">
              <h2>Dormir</h2>
            </Col>

            <Col md="12" className="mt-4 animated zoomInUp delay-2s">
              <p className="text-center">
                Por ultimo recuerda dejar de usar tu móvil u ordenador por lo
                menos 30 minutos antes de dormir, asi mejoraras tu descanso.
              </p>
            </Col>
            <Col
              md="12"
              className="mt-4 animated zoomInUp delay-4s centrado-fila"
            >
              <img
                src={seis}
                style={{ width: 360 }}
                alt="seis"
                className="img-fluid bordeImagen  animated  fadeInDown  delay-3s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
