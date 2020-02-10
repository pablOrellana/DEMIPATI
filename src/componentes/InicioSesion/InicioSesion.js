import React, { Component } from 'react';

import './InicioSesion.css';

class InicioSesion extends Component {
    render(){
        return(
            <div>
                <form className="form-signin my-4">
                    <img className="mb-4" src="/img/LOGO.jpg" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">¡Hola! Ingresa a tu cuenta y vive la experiencia Demipati. ✨✨✨</h1>
                    <label for="inputEmail" className="sr-only">Correo electrónico</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus /> 
                    <label for="inputPassword" className="sr-only">Contraseña</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"   required />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Recordarme
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
                </form>
            </div>
        )
    }
}


export default InicioSesion;
