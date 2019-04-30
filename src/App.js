import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="app">
      <Header titulo="Clima React" />
      <Formulario />
    </div>
  );
}

export default App;
