import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

class App extends Component {

  state = {
    error: '',
    consulta: {},
    resultado: {},
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Props');
    console.log(prevProps);
    console.log('State');
    console.log(prevState);
    if(prevState.consulta != this.state.consulta) {
      this.consultaApi();
    }

  }

  componentDidMount() {
    this.setState({
      error: false,

    })
  }

  consultaApi = () => {
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) return null; // to not to return undefined

    console.log("dentro de consultaApi", ciudad);

    // leer la url y agregar el API key
    const appId = '409bc547bda57e3ff75d2d7edc6501c4'
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appId}`;
    console.log(url);

    // query con fetch api
    fetch(url)
      .then(respuesta => {
        console.log("respuesta en fetch ", respuesta);
        return respuesta.json();
      })
      .then(datos => {
        console.log("datos en fetch ", datos);
        this.setState({
          resultado: datos,
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  // Agregar los datos al state
  datosConsulta = (respuesta) => {
    // console.log("dentro de App.js ", respuesta);
    if (respuesta.ciudad === '' || respuesta.pais === '') {
      // console.log("Hay errores");
      this.setState({
        error: true,
      })
    } else {
      console.log("Todo correcto");
      this.setState({
        error: false,
        consulta: respuesta,
      })
    }
  }

  render() {


    const error = this.state.error;

    let resultado;

    if(error) {
      resultado = <Error mensaje="Ambos campos son Obligatorios" />
    } else {
      resultado = <Clima datosClima={this.state.resultado} />
    }


    return (
      <div className="app">
        <Header titulo="Clima React" />
        <Formulario dConsulta={this.datosConsulta}/>
        {resultado}
      </div>
    );
  }
}

export default App;