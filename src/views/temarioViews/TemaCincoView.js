import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cinco01 from '../../assets/img/ImgErgonometria/cinco01.png'
import cinco02 from '../../assets/img/ImgErgonometria/cinco02.png'
import objetivo from '../../assets/img/ImgErgonometria/objetivo.jpg'

class TemaCincoView extends Component {
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
          <Row className="centrado-fila">
            <Col xs="12">
              <h2 className="animated fadeInDown delay-0s">
                <b>Limpia tus dispositivos</b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="7">
              <p className="animated fadeInDown delay-1s">
                Realiza una rutina diara de limpieza y desinfeccion antes de
                usar tus dispositivos y perifericos.
              </p>
            </Col>
            <Col xs="4" className="centrado-fila  animated fadeInDown">
              <img
                src={cinco01}
                style={{ width: 350 }}
                alt="cinco01"
                className="img-fluid bordeImagen  animated fadeInUpBig delay-1s  "
              />
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="4" className="centrado-fila  animated fadeInDown">
              <img
                src={cinco02}
                style={{ width: 350 }}
                alt="cinco02"
                className="img-fluid  bordeImagen animated fadeInUpBig delay-1s  "
              />
            </Col>
            <Col xs="7">
              <p className="animated fadeInDown delay-1s">
                Ya que son portadores de una gran cantidad de microorganismos
                que podrian afectar tu salud.
              </p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="7">
              <p className="animated fadeInDown delay-1s">
                Higieniza con mayor cuidado los que estan en contacto con otras
                personas.
              </p>
            </Col>
            <Col xs="4" className="centrado-fila  animated fadeInDown">
              <img
                src={objetivo}
                style={{ width: 350 }}
                alt="objetivo"
                className="img-fluid  bordeImagen animated fadeInUpBig delay-1s  "
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCincoView
