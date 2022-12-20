import logo from './logo.svg';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import Carrusel from './Componets/Carrusel/Carrusel';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';
import Categorias from './Componets/Categorias/Categorias'
import Main from './Componets/Main/Main'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Mascasa from './Componets/Marcas/Mascasa';
import Trueno from './Componets/Marcas/Trueno';
import Card from './Componets/Cards/Cards.js'

let articulos = [
  {
    sku:5094,
    articulo: "Monopatín Urbano",
    precio: 16999,
    img: "img/5094.jpg",
    marca: "JuguePatin"
  },
  {
    sku:13006,
    articulo: "Comedero doble",
    precio: 1899,
    img: "img/13006.jpg",
    marca: "Kenia"
  },
  {
    sku:5023,
    articulo: "Skate Profesional",
    precio: 5999,
    img: "img/5023.jpg",
    marca: "JuguePatin"
  },
  {
    sku:18000,
    articulo: "Pava Eléctrica +Casa",
    precio: 3999,
    img: "img/18000.jpg",
    marca: "+Casa"
  },
  {
    sku:631,
    articulo: "Set de Cacerolas x4",
    precio: 13999,
    img: "img/0631.jpg",
    marca: "+Casa"
  },
  {
    sku:14015,
    articulo: "Microfono Parlante",
    precio: 2299,
    img: "img/14015.jpg",
    marca: "+Casa"
  }
]

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
        <div className="d-flex">
        {articulos.map(
          ({ sku, articulo, precio, img, marca }) => (
            <Card
              titulo={articulo}
              img={img}
              precio={precio}
            />
          )
        )}
        </div>
      </Router>

      
    </div>
  );
}

export default App;
