import React, {useState} from 'react'
import './App.css';

import Media from '../src/components/Media'
import Soma from '../src/components/Soma'
import Sorteio from '../src/components/Sorteio'


import Intervalo from '../src/components/Intervalo'

function App() {

  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)
  return (
    <div className="App">
      <h1>Exercicios React-Redux</h1>
      <div className="linha">
        <Intervalo min={min} max={max}
        onMinChanged={setMin}
        onMaxChanged={setMax}
        ></Intervalo>
      </div>
      <div className="linha">
        <Media min={min} max={max}>x</Media>
        <Soma min={min} max={max}>y</Soma>
        <Sorteio min={min} max={max}>z</Sorteio>
      </div>

    </div>
  );
}

export default App;
