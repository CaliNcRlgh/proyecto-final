import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx'
import Title from './components/Title'
import ItemListContainer from './components/ItemListContainer.jsx';
function App() {

  return (
    <div className="App">
      <Title/>
      <NavBar />
      <ItemListContainer greeting = 'Bienvendio'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
