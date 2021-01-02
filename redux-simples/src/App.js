import logo from './logo.svg';
import './App.css';
import Card from '../src/components/Card'
import Intervalo from '../src/components/Intervalo'

function App() {
  return (
    <div className="App">
      <h1>Exercicios React-Redux</h1>
      <div className="linha">
       <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Card title="Card 1" green>
          x
        </Card>
        <Card title="Card 2" blue>
          y
      </Card>

        <Card title="Card 2" purple>
          y
      </Card>
      </div>

    </div>
  );
}

export default App;
