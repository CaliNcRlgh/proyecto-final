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
      
    </div>
  );
}

export default App;
