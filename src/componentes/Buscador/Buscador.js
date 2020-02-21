import React, { Component } from 'react'
import "./Buscador.css";

class Buscador extends Component{
    render(){
        return(
            <section  className="my-5">
                <div className="mx-auto publica-buscador my-4">
                    <button className="btn btn-danger my-sm-0 px-md-4 btn-lg" style={{'border-radius': '30px', 'padding': '15px 70px 15px 70px'}} type="submit">PUBLICA AQUÍ!</button>
                </div>
                <div className="container mx-auto">
                    <div className="row margin-row-buscador">
                        <div className="col-md-6">
                            <h2>¿Qué materiales de estudio buscas?</h2>
                        </div>
                        <div className="col-md-6 form-margin-buscador">
                            <form className="form">
                                <input className="form-control mr-sm-2" type="search" placeholder="Buscar     libro" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 mx-md-0 mx-sm-0 mx-lg-0 mx-auto" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Buscador