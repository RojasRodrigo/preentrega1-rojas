
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <NavBar />

      <div>
        <ItemListContainer greeting="¡Tu tienda online de confianza!"/>
      </div>
    
    </div>


  );
}

export default App;
