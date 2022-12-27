import logo from './logo.svg';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import Carrusel from './Componets/Carrusel/Carrusel';
import Main from './Componets/Main/Main'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Componets/ItemDetailContainer/ItemDetailContainer';
import Tareas from './Componets/Ejercicio/Tareas'
import Trueno from './Componets/Trueno/Trueno';

function App() {
  return (
  <div className="App">
  <Carrusel/>
  <Router>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/marca/:marca' element={<Main/>}/>
      <Route path='/marca/TRUENO' element={<Trueno/>}/>
    </Routes>
  </Router>

  
</div>

      
    // </div>
  );
}

export default App;
