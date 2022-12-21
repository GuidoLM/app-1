import React from 'react'
import Card from '../Cards/Cards'

//Esta es la ItemListContainer

let articulos = [
  {
    sku:5094,
    articulo: "Monopatín Urbano",
    precio: 16999,
    img: "img/productos/5094.jpg",
    marca: "JuguePatin"
  },
  {
    sku:13006,
    articulo: "Comedero doble",
    precio: 1899,
    img: "img/productos/13006.jpg",
    marca: "Kenia"
  },
  {
    sku:5023,
    articulo: "Skate Profesional",
    precio: 5999,
    img: "img/productos/5023.jpg",
    marca: "JuguePatin"
  },
  {
    sku:18000,
    articulo: "Pava Eléctrica +Casa",
    precio: 3999,
    img: "img/productos/18000.jpg",
    marca: "+Casa"
  },
  {
    sku:631,
    articulo: "Set de Cacerolas x4",
    precio: 13999,
    img: "img/productos/0631.jpg",
    marca: "+Casa"
  },
  {
    sku:14015,
    articulo: "Microfono Parlante",
    precio: 2299,
    img: "img/productos/14015.jpg",
    marca: "+Casa"
  }
]



const Main = () => {
  return (
    <div>
        <h1>Página Principal</h1>
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
       
        
    </div>
  )
}

export default Main