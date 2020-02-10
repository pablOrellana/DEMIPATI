import React, { Component } from 'react';
import './Home.css';

import Navegacion from '../Navegacion';
import Presentacion from '../Presentacion';
import Buscador from '../Buscador';
import Registro from '../Registro';
import Catalogo from '../Catalogo';
import Pasos from '../Pasos';

class Home extends Component {
    constructor() {
        super()
        this.myRef = React.createRef();
    
    }
    scroll(ref) {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
    render(){
        return(
            <div className="Home">
                <Navegacion scroll={this.scroll.bind()} myRef={this.myRef}/>
                <Presentacion/>
                {/*<Tareas/>*/}

                {/*Sección  ¿qué libros buscas?*/}
                <hr className="m-0"></hr>
                <Buscador/>

                {/* Sube tu libro */}
                {/* <hr className="m-0"></hr>
        <section className="my-5">
          <div className="container">
            <div className="text-center">
              
              <h3>Sube tu libro</h3>
              <p className="lead">Publica la venta de tu libro en nuestra plataforma indicandonos los datos que se muestran a continuación:</p>
            </div>

            <div className="row">
              <div className="col-md-8 mx-auto order-md-1">                
                <form className="needs-validation" noValidate="">
                  <h4 className="mb-3">Datos de contacto</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstNamepub">Nombres</label>
                      <input 
                      type="text" 
                      className="form-control" 
                      id="firstNamepub" placeholder="Nombres"
                      required=""
                      />

                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastNamepub">Apellidos</label>
                      <input type="text" className="form-control" id="lastNamepub" placeholder="Apellidos" required=""/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="email">Email <span className="text-muted">(Opcional)</span></label>
                      <input type="email" className="form-control" id="email" placeholder="example@gmail.com"/>
                      <div className="invalid-feedback">
                        Este no es un correo
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="phone">Número de celular</label>
                      <input type="text" className="form-control" id="phone" placeholder="+51 971854793"/>
                      <div className="invalid-feedback">
                        Ingrese un número válido
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="address">Dirección <span className="text-muted"> (Referencial)</span></label>
                    <input type="text" className="form-control" id="address" placeholder="Calle C. Aramburú 794 San Miguel - Lima" required=""/>
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address2">Universidad o Instituto en la que estudias <span className="text-muted">(Siglas)</span></label>
                    <input type="text" className="form-control" id="address2" placeholder="PUCP"/>
                  </div>
                  
                  <h4 className="mb-3">Datos del libro</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="bookName">Título del libro</label>
                      <input type="text" className="form-control" id="bookName" placeholder=""  required=""/>
                      <div className="invalid-feedback">
                        Estás seguro que este es el nombre
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName">Autor</label>
                      <input type="text" className="form-control" id="lastName" placeholder="" required=""/>
                      <div className="invalid-feedback">
                        Ingresa un nombre válido
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="phone">Fecha aproximada de compra</label>
                      <input type="text" className="form-control" id="date" placeholder="abril 2018"/>
                      <div className="invalid-feedback">
                        Escoge bien la fecha
                      </div>
                    </div>
                  
                    <div className="col-md-6 mb-3">
                      <label htmlFor="country">Estado</label>
                      <select className="custom-select d-block w-100" id="country" required="">
                        <option value="onChange">Elige</option>
                        <option>10/10</option>
                        <option>09/10</option>
                        <option>08/10</option>
                        <option>07/10</option>
                      </select>
                      <div className="invalid-feedback">
                        EScoja uno de los valores
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="temabook">Temática</label>
                      <select className="custom-select d-block w-100" id="temabook" required="">
                        <option value="onChange">Elige</option>
                        <option>Química</option>
                        <option>Economía</option>
                        <option>Empresas</option>
                        <option>Ingeniería</option>
                        <option>Arquitectura</option>
                        <option>Agro</option>
                        <option>Insdustrial</option>
                        <option>Manual</option>
                        <option>Programación</option>
                        <option>Electrónica</option>
                        <option>Sistemas</option>
                        <option>Arte</option>
                      </select>
                      <div className="invalid-feedback">
                        EScoja uno de los valores
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="cursousado">¿En qué curso lo usaste?</label>
                      <input type="text" className="form-control" id="cursousado" placeholder="Finanzas II"/>
                      <div className="invalid-feedback">
                        ¿?
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <label htmlFor="exampleFormControlTextarea1">Descripción del Producto</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="col-md-6 mb-3">                   
                      <label htmlFor="inputFile">Selecciona al menos 3 fotos</label>
                      <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                    <div className="mb-3 col-md-6 mx-auto">
                      <label htmlFor="precio">¿A qué precio lo deseas vender? * </label>
                      <input type="text" className="form-control" id="precio" placeholder="s/.24"/>
                      <div className="invalid-feedback">
                        ¿?
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Publicar</button>
                </form>
              </div>
            </div>
          </div>

        </section> */}

        {/*Sección Catálogo*/}
        <hr className="m-0"></hr>
        <Catalogo />

        {/*Sección Quieres solicitar algun libro?*/}
        {/* <hr className="m-0"></hr>
        <section className="my-5">
          <h3>¿Deseas comprar algun libro específico?... ¡solicítalo!</h3>
          <h4 className="mb-3">Datos del libro</h4>
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto order-md-1">                
                <form className="needs-validation" noValidate="">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="bookNameSoli">Título del libro</label>
                      <input type="text" className="form-control" id="bookNameSoli" placeholder="Doña Bárbara"  required=""/>
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="autorSoli">Autor</label>
                      <input type="text" className="form-control" id="autorSoli" placeholder="Romulo Gallegos" required=""/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="dateSoli">Fecha aproximada de compra</label>
                      <input type="text" className="form-control" id="dateSoli" placeholder="abril 2018"/>
                      <div className="invalid-feedback">
                        Ingrese un número válido
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="univSoli">Universidad del solicitante</label>
                      <input type="text" className="form-control" id="univSoli" placeholder="Cayetano" required=""/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                  </div>
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Solicitar</button>
                </form>
              </div>
            </div>

              </div>
        </section> */}

        {/*Sección Inicia Sesión*/}
        {/* <hr className="m-0"></hr>
        <section className="my-5">
          <div className="container">
            <h3>Inicia Sesión</h3>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <form>
                  <div className="mx-auto text-center">
                    <img className="mb-4" src="/img/LOGO.jpg" alt="" width="72" height="72"/>
                  </div>

                  <div className="form-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email" required="" autoFocus=""/>
                    <label htmlFor="inputEmail">Dirección de correo electrónico</label>
                  </div>

                  <div className="form-group">
                    <input type="password" id="inputPasswordreg" className="form-control" placeholder="Password" required=""/>
                    <label htmlFor="inputPasswordreg">Contraseña</label>
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Recuerdame</label>
                  </div>
                  <button className="btn btn-lg btn-success btn-block" type="submit">Registrarse</button>
                </form>
              </div>
            </div>
            
          </div>

        </section> */}
        <hr className="m-0"></hr>

        <Registro myRef={this.myRef}/>

        {/*Sección ¿Cómo funciona?*/}
        <hr className="m-0"></hr>
        <Pasos/>

        {/*Sección Nosotros*/}
        {/* <section className="my-5">
          <div className="container">
            <h3>Nosotros</h3>
            <div className="media row">
              <div className="col-md-3">
                <img src="./img/favicon/apple-icon-120x120.png" className="align-self-center mr-3" alt="..."/>
              </div>
              
              <div className=" col-md-9 media-body text-justify">
                <p>Somos Demipati, un emprendidmiento comprometido con la economía circular promoviendo de tal modo iniciativas que favorezcan el reuso de materiales. La economía circular es una estrategia que tiene por objetivo reducir tanto la entrada de los materiales vírgenes como la producción de desechos, cerrando los «bucles» o flujos económicos y ecológicos de los recursos.</p>
                <p className="my-0">La economía circular es una estrategia que tiene por objetivo reducir tanto la entrada de los materiales vírgenes como la producción de desechos, cerrando los «bucles» o flujos económicos y ecológicos de los recursos.</p>
              </div>
            </div>
          </div>
        </section> */}
        <hr ></hr>
        <footer className="page-footer font-small blue pt-4">
            <div class="container">
              <div class="text-center center-block">
                <p class="txt-railway">- Redes sociales -</p>
                <br />
                <a href="https://www.facebook.com/Demipati-112461780153415/" target="_blank"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
	              <a href="https://twitter.com" target="_blank"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
	              <a href="https://instagram.com" target="_blank"><i id="social-gp" class="fa fa-instagram fa-3x social"></i></a>
	              <a href="mailto:demipati@gmail.com" target="_blank"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
              </div>
              <hr />
            </div>
            <div class="footer-copyright text-center py-3">© 2020 Copyright :
              <a href="/"> Demipati</a>
            </div>  
        </footer>
            </div>
        )
    }
}

export default Home;