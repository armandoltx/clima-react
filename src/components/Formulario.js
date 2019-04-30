import React, { Component } from 'react';

class Formulario extends Component {
  render() {
    return (
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input type="text" name="" id="ciudad"/>
                <label htmlFor="ciudad">Ciudad:</label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <select name="" id="pais">
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