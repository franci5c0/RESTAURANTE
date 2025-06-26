import logo from "./logo.svg";
import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  // const nome = "maria"; FAZ PARTE DO VALOR DINÂMICO DO "SayMyName"

  // const nome = "SCoiso"

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <SayMyName nome="Manuel" /> {/*IMPORTANDO A CONST SayMyName*/}
        {/* <SayMyName nome={nome} />  JEITO DINÂMICO DE CHAMAR O IMPORT NOME  */}
        {/* <Pessoa
          nome="SCoiso"
          idade="23"
          profissao="programador"
          foto="https://biodiversidade.com.pt/wp-content/uploads/2022/07/header_Texugo_600x960.jpg"
        /> */}
      </header>
    </div>
  );
}

export default App;
