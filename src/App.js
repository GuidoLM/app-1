import logo from './logo.svg';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import Carrusel from './Componets/Carrusel/Carrusel';
import Main from './Componets/Main/Main'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <Carrusel/>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Marca/:marca' element={<Main/>}/>
          <Route path='/Marca/:marca' element={<Main/>}/>
          <Route path='/Marca/:marca' element={<Main/>}/>
          <Route path='/Marca/:marca' element={<Main/>}/>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
