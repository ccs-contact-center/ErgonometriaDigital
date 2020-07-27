import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'


class PresentacionView extends Component {
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
          <Row>
            <Col
              xs="12"
              className=" animated  fadeInDown  delay-1s"
            >
              <h2 className="animated  infinite delay-0s">
                <b>CONCLUSION </b>
              </h2>
            </Col>
            <Col xs="12" className="centrado-fila">
              <div
                style={{ maxWidth: '800px' }}
                className="cajaA2 bg-fondo-btn2 animated  fadeInUp  delay-2s"
              >
                <p className="text-justify animated  fadeInDown  delay-3s ">
                El uso inteligente de los dispositivos contribuye a disminuir riesgos para tu salud y para los que te rodean.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default PresentacionView
