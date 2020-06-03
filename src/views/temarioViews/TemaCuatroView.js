import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import classnames from 'classnames'
import consejos01 from '../../assets/img/ImgLadron/cuatro.PNG'

class TemaCuatroView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  state = {
    activeTab: '0',
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) this.setState({ activeTab: tab })
  }

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>El Ladrón de Problemas</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12">
              <h2 className="animated fadeInDown">
                <b>¿Puedo Ayudar?</b>
              </h2>
            </Col>
            <Col xs="12" className="  animated fadeInDown">
              <Row>
                <Col xs="8">
                  <Row>
                    <Col xs="12">
                      <p>
                        {' '}
                        Hasta este momento toda ha sido fácil ¿cierto?, pero es
                        aquí donde se necesita un poco más de análisis.
                      </p>
                      <p>Existen dos caminos en este punto:</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" className="centrado-fila">
                      <Nav tabs className="text-center">
                        <NavItem className="d-flex justify-content-center">
                          <NavLink
                            className={
                              (classnames({
                                active: this.state.activeTab === '1',
                              }),
                              'bg-fondo-btn btn btnAct text-danger ')
                            }
                            onClick={() => {
                              this.toggle('1')
                            }}
                          >
                            <div className=" text-center ">
                              <b>1</b>
                            </div>
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            className={
                              (classnames({
                                active: this.state.activeTab === '2',
                              }),
                              'bg-fondo-btn btn btnAct text-danger ')
                            }
                            onClick={() => {
                              this.toggle('2')
                            }}
                          >
                            <div color="primary" className="dark text-center">
                              <b>2</b>
                            </div>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={
                              (classnames({
                                active: this.state.activeTab === '3',
                              }),
                              'bg-fondo-btn btn btnAct text-danger ')
                            }
                            onClick={() => {
                              this.toggle('3')
                            }}
                          >
                            <div color="primary" className="dark text-center">
                              <b>2.1</b>
                            </div>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col xs="12">
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="0"></TabPane>
                        <TabPane tabId="1">
                          <Row>
                            <Col sm="xs">
                              <p className="text-danger">
                                No soy responsable de ayudar ( no es mi rol, que
                                lo ayude alguien más).
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="2">
                          <Row>
                            <Col sm="12">
                              <p className="text-warning">
                                Es mi responsabilidad ayudar ( es mi rol).
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="3">
                          <Row>
                            <Col sm="12">
                              <p className="text-warning">
                                Soy corresponsable ( no es mi rol, pero se como
                                y puedo hacerlo).{' '}
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </Col>
                <Col xs="4" className="centrado-fila">
                  <img
                    src={consejos01}
                    style={{ width: 350 }}
                    alt="escucha-activa.jpg"
                    className="img-fluid   animated fadeInUpBig delay-2s  "
                  />
                </Col>
                <Col xs="12">
                  <p>Por lo tanto nuevamente realiza una división de esas problemas</p>
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
