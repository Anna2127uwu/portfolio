import logo from './logo.svg';
import './App.css';
import {PrimerComponente} from './componentes/PrimerComponente';
import {SegundoComponente} from './componentes/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estamos aprendiendo React
        </p>

<PrimerComponente />
<PrimerComponente />
<PrimerComponente />
<PrimerComponente />
<hr />
<SegundoComponente />

      </header>
    </div>
  );
}

export default App;
