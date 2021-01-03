import React from 'react'
import './App.css';

import Media from '../src/components/Media'
import Soma from '../src/components/Soma'
import Sorteio from '../src/components/Sorteio'


import Intervalo from '../src/components/Intervalo'

function App() {

  return (
    <div className="App">
      <h1>Exercicios React-Redux</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Media>x</Media>
        <Soma>y</Soma>
        <Sorteio>z</Sorteio>
      </div>

    </div>
  );
}

export default App;
