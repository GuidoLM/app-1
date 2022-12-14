import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Carrito from '../Carrito/Carrito'
import {NavLink} from 'react-router-dom'

//Decidí ingresar el ItemListContainer también en el Navbar porque me puede servir para cambiar el nombre de la página que visita el usuario, ya sea cambiarlo a que diga "carrito de compras" o "productos" en base a la página en la que está, quiero dejar el carrusel como header básicamente, el diseño sigue en proceso.
//Aquí mismo también está el carrito al final del navbar

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#e3f2fd'}}> 
            <div className="container-fluid">
                <ItemListContainer titulo={"PriceManía"}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Marcas
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">+Casa</a></li>
                            <li><a className="dropdown-item" href="#">TRUENO</a></li>
                            <li><NavLink to="/+Casa">+Casa</NavLink></li>
                            <li><NavLink to="/Trueno">TRUENO</NavLink></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">Ayuda</a>
                        </li>
                    </ul>
                    <Carrito cantidad={3}/>
                </div>
            </div>
        </nav>
    </div>
    
  )
}

export default Navbar