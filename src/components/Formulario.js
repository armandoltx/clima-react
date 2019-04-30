import React, { Component } from 'react';

class Formulario extends Component {

  // refs para los campos del formulario
  ciudadRef = React.createRef();
  paisRef = React.createRef();


  buscarClima = (e) => {
    // 1. Prevenir default para q no se recargue
    e.preventDefault();
    console.log("ciudadRef ", this.ciudadRef.current.value)

    // 2. Crear el Objeto con los datos usando los refs (leyendolos)
    const respuesta ={
      ciudad: this.ciudadRef.current.value,
      pais: this.paisRef.current.value,
    }

    console.log("respuesta: ", respuesta);

    // 3. Agregarlo y enviarlo por props hacia el padre para actualizar el state
    this.props.dConsulta(respuesta);

    // 4. Resetear el formulario
    
  }


  render() {
    return (
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.buscarClima}>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input type="text" name="" id="ciudad" ref={this.ciudadRef}/>
                <label htmlFor="ciudad">Ciudad:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <select name="" id="pais" ref={this.paisRef}>
                  <option value="" defaultValue> Elige un Pais</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">Spain</option>
                  <option value="US">Estado Unidos</option>
                  <option value="AU">Australia</option>
                  <option value="NZ">New Zeland</option>
                </select>
                <label htmlFor="pais"></label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2 buscador">
                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar..." />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulario;