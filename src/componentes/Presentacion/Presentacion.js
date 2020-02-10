import React, { Component } from 'react';
import "./Presentacion.css";

class Presentacion extends Component{
    render(){
        return(
            <div className="Presentacion">
                <div className="container-fluid px-0 ">
                    {/* <div className="b-home-img"></div> */}
                    <img id="main-img" className="img-fluid" src="./img/intercambio_editado.jpg"  alt="Responsive"/>
                    <div className="rounded-bg"></div>
                    <div className="side-text px-3 py-3 m-2">
                        <p style={{'color': 'white', 'fontSize': '1.75rem'}}>Somos Demipati, un emprendimiento comprometido con la economía circular, promoviendo de tal modo iniciativas que favorezcan el reuso de materiales.</p>
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