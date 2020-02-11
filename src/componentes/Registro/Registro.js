import React, { Component } from 'react';
import './Registro.css';

class Registro extends Component{
    render(){
        return(
        <section ref={this.props.myRef} className="my-3 py-4 bg-color-registro">
          <div className="container">
            <h3 id="registro">Registrate</h3>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <form>
                    <div className="form-row">
                        <div className="mx-auto text-center col-12">
                            <img className="mb-4" src="/img/LOGO.jpg" alt="" width="72" height="72"/>
                        </div>
                        <div className="form-group col-md-6 col-sm-12 my-3">
                            <label htmlFor="inputName">Nombres</label>
                            <input type="text" id="inputName" className="form-control" placeholder="Nombres" required autoFocus=""/>
                        </div>
                        <div className="form-group col-md-6 col-sm-12 my-3">
                            <label htmlFor="inputLastName">Apellidos</label>
                            <input type="text"  id="inputLastName" className="form-control" placeholder="Apellidos" required  autoFocus=""/>
                        </div>
                        <div className="form-group col-md-6 col-sm-12 my-3">
                            <label htmlFor="inputGender">Género</label>
                            <select className="form-control" id="inputGender">
                                <option selected>Seleccionar...</option>
                                <option>Masculino</option>
                                <option>Femenino</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6 my-3">
                            <label htmlFor="inputEmail">Dirección de correo electrónico</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email" required autoFocus=""/>
                        </div>
                        <div className="form-group col-md-4 my-3">
                            <label htmlFor="inputCountry">País</label>
                            <input type="text" id="inputCountry" className="form-control" placeholder="País" required autoFocus=""/>
                        </div>
                        <div className="form-group col-md-8 my-3">
                            <label htmlFor="inputUniversity">Universidad</label>
                            <input type="text" id="inputUniversity" className="form-control" placeholder="Universidad" required autoFocus=""/>
                        </div>
                        <div className="form-group col-md-6 my-3">
                            <label htmlFor="inputState">Región</label>
                            <input type="text" id="inputState" className="form-control" placeholder="Estado" required autoFocus=""/>
                        </div>
                        <div className="form-group col-md-6 my-3">
                          <label htmlFor="inputPassword">Contraseña</label>
                          <input type="password" id="inputPassword" className="form-control"    placeholder="Contraseña" required />
                        </div>
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
                          <label className="form-check-label" htmlFor="exampleCheck2">Términos y condiciones</label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Registrarse</button>
                    </div>
                </form>
              </div>
            </div>
            
          </div>

        </section>
        )
    }
}

export default Registro