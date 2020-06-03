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
import dos01 from '../../assets/img/ImgErgonometria/dos-01.jpg'
import dos02 from '../../assets/img/ImgErgonometria/dos-02.jpg'
import dos03 from '../../assets/img/ImgErgonometria/dos-03.jpg'

class TemaDosView extends Component {
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
          <h3>Ergonometría Digítal</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="">
            <Col xs="12" className="animated zoomInUp delay-1s">
              <h2>Distancia </h2>
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
                      <img
                        src={dos01}
                        style={{ width: 100 }}
                        alt="dos01"
                        className="img-fluid   animated  fadeInDown  delay-1s"
                      />
                      <br />

                      <b>Movíl</b>
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
                      <img
                        src={dos02}
                        style={{ width: 100 }}
                        alt="dos02"
                        className="img-fluid   animated  fadeInDown  delay-2s"
                      />
                      <br />
                      <b>Computadora</b>
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
                      <img
                        src={dos03}
                        style={{ width: 100 }}
                        alt="dos03"
                        className="img-fluid   animated  fadeInDown  delay-3s"
                      />
                      <br />
                      <b>TV</b>
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
                  <Col sm="12">
                      <p>
                        En tu dispositivo móvil la distancia debe ser de 35 cm.
                      </p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <p>
                        Para tu equipo de computo la distancia optima es de 50
                        cm.
                      </p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <p>
                        La distancia minima para mirar television es de 160 cm.
                      </p>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
