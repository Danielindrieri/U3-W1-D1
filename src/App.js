import './App.css';
import ProvaUno from './Componenti/ProvaUno';
import ProvaClassUno from './Componenti/ProvaClassUno';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ProvaClassUno label = "Bottone 1"/>
       <ProvaUno myurl="https://placecats.com/300/200" />
      </header>
    </div>
  );
}

export default App;
