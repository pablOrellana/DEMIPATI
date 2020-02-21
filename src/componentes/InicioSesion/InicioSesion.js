import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './InicioSesion.css';
import BackButton from '../BackButton';

class InicioSesion extends Component {
    render(){
        return(
            <div id="InicioSesion">
                <BackButton />
                <form className="form-signin my-3" style={{'paddingBottom': '28px'}}>
                    <a href="/DEMIPATI/">
                        <img className="mb-4" src="/img/LOGO.jpg" alt="" width="72" height="72"/>
                    </a>
                    <h1 className="h3 mb-3 font-weight-normal" style={{'color': '#FFF'}}>¡Bienvenido!</h1>
                    <p style={{'color': '#FFF'}}> Ingresa a tu cuenta y vive la experiencia Demipati. ✨✨✨</p>
                    <div style={{'text-align': 'left'}}>
                        <label for="inputEmail" className="sr-only">CORREO ELECTRÓNICO</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Correo Electrónico" required autofocus />
                        <div style={{'text-align': 'right', 'margin-bottom': '10px'}}>
                            <p style={{'margin-bottom': '0em', 'color': '#FFF'}}><b>¿No tienes una cuenta?</b></p>
                            <Link to="/" style={{'color': '#F19900'}}>Regístrate</Link>
                        </div>
                        <label for="inputPassword" className="sr-only">CONTRASEÑA</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required />
                        <div style={{'text-align': 'right', 'margin-bottom': '10px'}}>
                            <Link to="/" style={{'color': '#F19900'}}>¿Se te olvido tu contraseña?</Link>
                        </div> 
                        <div className="checkbox mb-3">
                            <label style={{'color': '#FFF'}}>
                                <input type="checkbox" value="remember-me" />Recordarme
                            </label>
                        </div>
                    </div>
                    <button id="entrar" className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
                    <p className="mt-3 mb-2 text-muted">&copy; 2019-2020</p>
                </form>
            </div>
        )
    }
}


export default InicioSesion;
