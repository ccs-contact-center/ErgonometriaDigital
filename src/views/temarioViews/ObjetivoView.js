import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import Objetivo from '../../assets/img/ImgErgonometria/objetivo.jpg'

class ObjetivoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Objetivo</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" sm="12" md="12" lg="12">
              <div className=" animated  fadeInDown  delay-0s">
                <p className="text-justify ">
                  La ergonomía digital trata del diseño de los lugares de
                  trabajo, herramientas y tareas que coincidan con las
                  características fisiológicas, anatómicas y psicológicas del
                  trabajador.
                </p>
                <p>
                  Es decir , reducir la incidencia de enfermedades y lesiones al
                  operar equipo digital y electronico.
                </p>
              </div>
            </Col>
            <Col xs="12" sm="12" className="centrado-fila">
              <img
                src={Objetivo}
                style={{ width:400 }}
                alt="Objetivo"
                className="img-fluid bordeImagen  animated  fadeInDown  delay-1s"
              />
            </Col>
            <Col xs="12" sm="12" className="mt-4 text-center">
              <h3 className="animated  fadeInDown  delay-3s">
                <b>¡COMENCEMOS!</b>
              </h3>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default ObjetivoView
