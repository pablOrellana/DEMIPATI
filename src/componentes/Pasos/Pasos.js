import React, { Component } from 'react';
import './Pasos.css';

class Pasos extends Component {
    render(){
        return(
            <section  className="my-5">
          <div className="container-fluid my-4">
            <h3>Descubre cómo funciona la plataforma</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">Paso 1</strong>
                    <h3 className="mb-0">Registrate </h3>
                    <br/>
                    <p className="card-text mb-auto">Proporcionanos tus datos para que puedas conectarte con usuarios que venden o compran libros cerca de tu centro de estudios.</p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img className="img-fluid rounded" src="./img/working.jpg" width="200" alt="Dibujo de Ingeniería - P. Kaster" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">Paso 2</strong>
                    <h3 className="mb-0">Sube tu producto y valorízalo</h3><br/>
                    <p className="mb-auto">Entra al <a href="/">Formulario</a> de subir libro, indícanos las carácteristicas de tu libro y será publicada en la plataforma</p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img className="img-fluid rounded" src="./img/working.jpg" width="200" alt="Dibujo de Ingeniería - P. Kaster" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">Paso 3</strong>
                    <h3 className="mb-0">Contacta con el comprador</h3><br/>
                    <p className="mb-auto">Recibirás notificaciones de personas interesesadas en comprar tu producto, contacta con uno de ellos y vendele</p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img className="img-fluid rounded" src="./img/working.jpg" width="200" alt="Dibujo de Ingeniería - P. Kaster" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">Paso 4</strong>
                    <h3 className="mb-0">Entrega</h3><br/>
                    <p className="mb-auto">Tienes la posibilidad de encontrar en la plataforma a otra persona que puede hacer el recojo y entrega de tu producto. <a href="/">Contáctalo</a></p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img className="img-fluid rounded" src="./img/working.jpg" width="200" alt="Dibujo de Ingeniería - P. Kaster" />
                  </div>
                </div>
              </div>
            </div>
        
          </div>
            
        </section>
        )
    }
}

export default Pasos;