import React from 'react'
import Carrito from '../Carrito/Carrito'
import {NavLink} from 'react-router-dom'

//Decidí ingresar el ItemListContainer también en el Navbar porque me puede servir para cambiar el nombre de la página que visita el usuario, ya sea cambiarlo a que diga "carrito de compras" o "productos" en base a la página en la que está, quiero dejar el carrusel como header básicamente, el diseño sigue en proceso.
//Aquí mismo también está el carrito al final del navbar

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg" style={{backgroundColor: '#e3f2fd'}}>
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Price Manía</NavLink>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Marcas
                </a>
                <ul class="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/marca/+Casa">+Casa</NavLink></li>
                <li><NavLink className="dropdown-item" to="/marca/TRUENO">TRUENO</NavLink></li>
                <li><NavLink className="dropdown-item" to="/marca/Kenia">Kenia</NavLink></li>
                <li><NavLink className="dropdown-item" to="/marca/JuguePatin">JuegaPatin</NavLink></li>
                </ul>
                </li>
                <li class="nav-item">
                <a class="nav-link active">Ayuda</a>
                </li>
            </ul>
            </div>
            <Carrito cantidad={3}/>
        </div>
        </nav>
    </div>
    
  )
}

export default Navbar