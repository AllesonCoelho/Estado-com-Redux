import logo from './logo.svg';
import './App.css';
import Card from '../src/components/Card'

function App() {
  return (
    <div className="App">
      <h1>Exercicios React-Redux</h1>
      <div className="linha">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="linha">
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  );
}

export default App;
