import React, { Component } from 'react'
import { ReactSortable } from 'react-sortablejs'
import Nota from './notasReferencia'
import { Row, Col } from 'reactstrap'

class ActividadDrag2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          id: '1',
          name: 'a) Silencioso',
        },
      ],
      list2: [
        {
          id: '2',
          name: 'b) Amistoso',
        },
      ],
      list3: [
        {
          id: '3',
          name: 'c) Orgulloso',
        },
      ],
      list4: [
        {
          id: '4',
          name: 'd) Escéptico',
        },
      ],
      list5: [
        {
          id: '4',
          name: 'e) Ocupado',
        },
      ],
      list6: [],
      list7: [],
      list8: [],
      list9: [],
      list10: [],
    }
  }

  render() {
    return (
      <Row className="  centrado-fila ">
        <Col xs="12">
          <div className="card bg-fondo-btn2">
            <div className="centrado-fila bgImgTabla font-weight-bold">
              <div>
                <ReactSortable
                  list={this.state.list}
                  setList={(newState) => this.setState({ list: newState })}
                  group="shared-group-name"
                  style={{ cursor: 'pointer' }}
                >
                  {this.state.list.map((item) => (
                    <div key={item.id} style={{ marginBottom: '0px' }}>
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark p-1">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>

              <div>
                <ReactSortable
                  list={this.state.list2}
                  setList={(newState) => this.setState({ list2: newState })}
                  group="shared-group-name"
                  style={{ cursor: 'pointer' }}
                >
                  {this.state.list2.map((item) => (
                    <div key={item.id} style={{ marginBottom: '0px' }}>
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark p-1">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>
              <div>
                <ReactSortable
                  list={this.state.list3}
                  setList={(newState) => this.setState({ list3: newState })}
                  group="shared-group-name"
                  style={{ cursor: 'pointer' }}
                >
                  {this.state.list3.map((item) => (
                    <div key={item.id} style={{ marginBottom: '0px' }}>
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark p-1">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>
              <div>
                <ReactSortable
                  list={this.state.list4}
                  setList={(newState) => this.setState({ list4: newState })}
                  group="shared-group-name"
                  style={{ cursor: 'pointer' }}
                >
                  {this.state.list4.map((item) => (
                    <div key={item.id} style={{ marginBottom: '0px' }}>
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark p-1">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>
              <div>
                <ReactSortable
                  list={this.state.list5}
                  setList={(newState) => this.setState({ list5: newState })}
                  group="shared-group-name"
                  style={{ cursor: 'pointer' }}
                >
                  {this.state.list5.map((item) => (
                    <div key={item.id} style={{ marginBottom: '0px' }}>
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark p-1">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12">
          <div className="card   pl-4 pr-4">
            <h6 className=" mt-2">¡Arrastra aqui!</h6>

            <Row className="centrado-fila pl-2 pr-2 pb-1 pt-1 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list6}
                  setList={(newState) => this.setState({ list6: newState })}
                  group="shared-group-name"
                >
                  {this.state.list6.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                No debemos mostrar cansancio ni aburrimiento, tampoco romper su entusiasmo, o entrar en conversaciones o discusiones personales sobre asuntos personales del cliente.

                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 pb-1 pt-1 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list7}
                  setList={(newState) => this.setState({ list7: newState })}
                  group="shared-group-name"
                >
                  {this.state.list7.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                Debemos atenderle aportando datos objetivos y hechos probados del producto o servicio que estamos ofreciendo. 
Escucharlo de forma activa, mostrando interés por sus palabras. 
Mostrar calma y tranquilidad 

                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 pb-1 pt-1 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list8}
                  setList={(newState) => this.setState({ list8: newState })}
                  group="shared-group-name"
                >
                  {this.state.list8.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                Resulta inútil tratar de demostrarle que está en un error. Tampoco debemos manifestar impaciencia o debilidad, ni interrumpir bruscamente la conversación, pues se sentirá ofendido.

                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 pb-1 pt-1 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list9}
                  setList={(newState) => this.setState({ list9: newState })}
                  group="shared-group-name"
                >
                  {this.state.list9.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                No debemos confiarnos demasiado, ya que si se tarda demasiado en cerrar la compra pueden que decidan no realizarla en ese momento debido a su tendencia a la indecisión.

                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 pb-1 pt-1 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list10}
                  setList={(newState) => this.setState({ list10: newState })}
                  group="shared-group-name"
                >
                  {this.state.list10.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                Nunca elevar la voz aun si no nos contesta, porque pensemos que no nos escucha. 
Evitar los silencios prolongados

                </p>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs="12" className=" mt-3  centrado-fila">
          
        </Col>
        <Col xs="12" className=" mt-3 centrado-fila ">
          <Nota
            title1="Instrucción:"
            content1="Arrastre los las Letras correctas al recuadro."
          />
        </Col>
      </Row>
    )
  }
}

export default ActividadDrag2
