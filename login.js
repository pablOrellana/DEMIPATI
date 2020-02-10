'use strict';

const e = React.createElement;

class InicioSesion extends Component {
    render(){
        return(
            <div>
                <form class="form-signin my-4">
                    <img class="mb-4" src="/img/LOGO.jpg" alt="" width="72" height="72"/>
                    <h1 class="h3 mb-3 font-weight-normal">¡Hola! <br/> Ingresa a tu cuenta y vive la experiencia Demipati. ✨✨✨</h1>
                    <label for="inputEmail" class="sr-only">Correo electrónico</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Correo Electrónico" required autofocus /> 
                    <label for="inputPassword" class="sr-only">Contraseña</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Contrseña"   required />
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Recordarme
                        </label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
                </form>
            </div>
        )
    }
}

const domContainer = document.querySelector('#login');
ReactDOM.render(e(InicioSesion), domContainer);