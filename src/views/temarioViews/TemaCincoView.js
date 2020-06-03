import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cinco from '../../assets/img/ImgEmpatia/cinco.jpg'


class TemaCincoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>El Ladrón de Problemas</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12">
              <h2 className="animated fadeInDown delay-0s">
                <b>Voy Ayudar</b>
              </h2>
              <p className="animated fadeInDown delay-1s">
                Ya son pocos los problemas que te quedan ¿verdad? , pues te voy
                ayudar a que sean menos. De los problemas que identificaste
                retira todos aquellos que no tienen una solución, ya que no te
                es posible intervenir y únicamente toma en tus manos los que se
                pueden solucionar.
              </p>
              <p>
                Ya son pocos los problemas que te quedan ¿verdad? , pues te voy
                ayudar a que sean menos. De los problemas que identificaste
                retira todos aquellos que <b>no tienen una solución</b>, ya que
                no te es posible intervenir y únicamente toma en tus manos los
                que <b>se pueden solucionar</b>.{' '}
              </p>
              <p>
                <b>Pues claro ¡el ladrón de problemas!</b>
              </p>
              <p>
                <b>
                  A veces lo que te ayuda a solucionar un problema, es una
                  actitud.{' '}
                </b>
              </p>
              <p>
                Y si necesitas saber como solucionar un problema, acompáñame el
                el siguiente curso de SOLUCIÓN DE PROBLEMAS.{' '}
              </p>
            </Col>
            <Col xs="12" className="centrado-fila  animated fadeInDown">
              <img
                src={cinco}
                style={{ width: 350 }}
                alt="escucha-activa.jpg"
                className="img-fluid   animated fadeInUpBig delay-1s  "
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCincoView
