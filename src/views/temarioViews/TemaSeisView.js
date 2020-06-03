import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import ReactPlayer from 'react-player'
import conclusion from '../../assets/img/ImgEmpatia/conclusion.png'

class TemaSeisView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Empatía y Cortesía</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="">
            <Col xs="12" className="animated zoomInUp delay-1s">
              <h2>¿Hasta donde puede llegar tu empatía?</h2>
            </Col>
            <Col md="12" className="centrado-fila animated zoomInUp delay-2s">
              <div className=" centrado-fila">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=nfYPktsd9bs"
                  controls={true}
                />
              </div>
            </Col>
            <Col md="12" className="mt-4 animated zoomInUp delay-3s">
              <p>
                Podemos concluir indicando que la empatía es una reacción física
                de tu cuerpo pero también es una actitud.
              </p>
              <p style={{ marginBottom: '0px' }}>
                <b>Conclusiones:</b>
              </p>
              <ul>
                <li>Todos somos empáticos, lo traemos en el organismo.</li>
                <li>
                  {' '}
                  Unos somos más empáticos que otros, pero podemos trabajar en
                  ello.
                </li>
                <li>La cortesia es una acción y es una actitud.</li>
                <li>
                  {' '}
                  La empatía y cortesía son necesarios no solo para mi trabajo,
                  sino para la vida misma.
                </li>
                <li></li>
              </ul>

              <p>
                Espero te haya gustado el curso pero sobre todo hayas aprendido
                algo nuevo y lo apliques en todos los ambitos de tu vida.
              </p>
            </Col>
            <Col
              md="12"
              className="mt-4 animated zoomInUp delay-4s centrado-fila"
            >
              <img
                src={conclusion}
                style={{ width: 360 }}
                alt="conclusion"
                className="img-fluid  animated  fadeInDown  delay-1s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
