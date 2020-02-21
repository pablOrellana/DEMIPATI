import React, { Component } from 'react';
import './Registro.css';

import BackButton from '../BackButton';

class Registro extends Component{
    render(){
        return(
            <div id="registro">
                <BackButton />
              <div className="container">
                <div className="row" style={{'padding': '65px'}}>
                  <div id="registro-form" className="col-md-6 mx-auto py-4">
                    <form>
                        <div className="form-row">
                            <div className="mx-auto text-center col-12">
                                <img className="mb-4" src="/img/LOGO.jpg" alt="" width="72" height="72"/>
                            </div>
                            <div className="col-sm-12">
                                <h1 className="h3 mb-3 font-weight-normal" style={{'color': '#FFF'}}>Registrate</h1>
                            </div>
                            <div className="form-group col-md-6 col-sm-12 my-3">
                                {/* <label htmlFor="inputName">Nombres</label> */}
                                <input type="text" id="inputName" className="form-control" placeholder="Nombres" required autoFocus=""/>
                            </div>
                            <div className="form-group col-md-6 col-sm-12 my-3">
                                {/* <label htmlFor="inputLastName">Apellidos</label> */}
                                <input type="text"  id="inputLastName" className="form-control" placeholder="Apellidos" required  autoFocus=""/>
                            </div>
                            <div className="form-group col-md-6 col-sm-12 my-3">
                                {/* <label htmlFor="inputLastName">Código universitario</label> */}
                                <input type="text"  id="inputLastName" className="form-control" placeholder="Código Universitario" required  autoFocus=""/>
                            </div>
                            <div className="form-group col-md-6 my-3">
                                {/* <label htmlFor="inputEmail">Dirección de correo electrónico</label> */}
                                <input type="email" id="inputEmail" className="form-control" placeholder="Correo universitario" required autoFocus=""/>
                            </div>
                            <div className="form-group col-md-6 my-3">
                              {/* <label htmlFor="inputPassword">Contraseña</label> */}
                              <input type="password" id="inputPassword" className="form-control"           placeholder="Contraseña" required />
                            </div>
                            <div className="form-group col-md-6 my-3">
                              {/* <label htmlFor="inputPasswordRepeat">Contraseña</label> */}
                              <input type="password" id="inputPasswordRepeat" className="form-control"           placeholder="Repita contraseña" required />
                            </div>
                            <div className="form-group form-check">
                              <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
                              <label className="form-check-label" htmlFor="exampleCheck2" style={{'color': '#FFF'}}>Términos y condiciones</label>
                            </div>
                            <button id="registerButton" className="btn btn-lg btn-primary btn-block" type="submit">Registrarse</button>
                        </div>
                    </form>
                  </div>
                </div>
                
              </div>
            
            </div>
        )
    }
}

export default Registro