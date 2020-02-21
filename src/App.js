//AQUI ESTÁ LA APLICACIÓN, esta es una componenete (Principal), cada una de estas tiene su propio css

import React, {Component} from 'react'; //IMporta react
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './componentes/InicioSesion';
import Register from './componentes/Registro';

//import logo from './logo.svg';//Logo

//Sus estilos
import './App.css';

import Home from './componentes/Home';

//COMPONENTE APP
// La clase es una representacion de una parte de la página
class App extends Component {
  render(){
    return (
      // Todo debe estar encerrado por esta etiqueta
      //Para no confundir con "class" de REact se usa "className"
      // Propiedades ojooooo IMPORTANTE
      <Router>
        <div className="App">
          <Route path="/DEMIPATI" exact component={Home}/>
          <Route path="/DEMIPATI/login" exact component={Login}/>
          <Route path="/DEMIPATI/register" exact component={Register}/>
        </div>
      </Router>
    );
  }

}
export default App;
