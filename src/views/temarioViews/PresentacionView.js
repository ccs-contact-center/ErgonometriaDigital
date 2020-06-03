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
          <h3>ETIQUETA TELEFÓNICA</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12" className="centrado-fila">
            <h2>
                <b>¡Gracias!</b>
              </h2>
            </Col>
            <Col xs="12" className="centrado-fila">
             
              <div style={{ width: '400px' }} className="cajaA1 bg-fondo-btn3">
                <p className="text-justify">
                  Has completado el curso de habilidades operativas y te damos
                  las gracias por el tiempo invertido en la mejora continua de
                  tu función dentro de CCS. Te recomendamos aplicar lo que vimos
                  el día de hoy en tu próxima llamada y no olvides que ¡una
                  atención de excelencia te llevará a sobresalir todos los días!
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
