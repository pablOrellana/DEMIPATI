import React, { Component } from 'react';
import "./Presentacion.css";

class Presentacion extends Component{
    render(){
        return(
            <div className="Presentacion">
                <div className="container-fluid px-0 ">
                    {/* <div className="b-home-img"></div> */}
                    {/* <img id="main-img" className="img-fluid" src="./img/intercambio_editado.jpg"  alt="Responsive"/>
                    <div className="rounded-bg"></div>
                    <div className="side-text px-3 py-3 m-2">
                        <p style={{'color': 'white', 'fontSize': '1.75rem'}}>Somos Demipati, un emprendimiento comprometido con la economía circular, promoviendo de tal modo iniciativas que favorezcan el reuso de materiales.</p>
                    </div> */}
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                        
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="./img/slider1.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block background-presentacion">
                                    <h1>Revaloríza, conectando de la manera más fácil</h1>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="./img/slider2.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block background-presentacion">
                                    <h1>Revaloríza, conectando de la manera más fácil</h1>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="./img/slider3.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block background-presentacion">
                                    <h1>Revaloríza, conectando de la manera más fácil</h1>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                    {/* <div className="row">
                        <div className="col-lg-6">
                            aafdf
                        </div>
                    </div> */}
                    
            </div>
        )
    }
}

export default Presentacion;