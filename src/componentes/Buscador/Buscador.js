import React, { Component } from 'react'
import "./Buscador.css";

class Buscador extends Component{
    render(){
        return(
            <section  className="my-5">
                <div className="container mx-auto">
                    <div className="row margin-row-buscador">
                        <div className="col-md-6">
                            <h2>¿Qué materiales de estudio buscas?</h2>
                        </div>
                        <div className="col-md-6 form-margin-buscador">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Buscar     libro" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0 mx-md-0 mx-sm-0       mx-lg-0 mx-auto" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Buscador