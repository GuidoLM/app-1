import logo from './logo.svg';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import Carrusel from './Componets/Carrusel/Carrusel';
import Categorias from './Componets/Categorias/Categorias'
import Main from './Componets/Main/Main'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Mascasa from './Componets/Marcas/Mascasa';
import Trueno from './Componets/Marcas/Trueno';


function App() {
  return (
    
    <div className="App">
      <Carrusel/>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Categorias' element={<Categorias/>}/>
          <Route path='/+Casa' element={<Mascasa/>}/>
          <Route path='/Trueno' element={<Trueno/>}/>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
