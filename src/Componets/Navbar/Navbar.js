import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">PriceManía</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            <a className="nav-link" href="#">Descuentos</a>
            <a className="nav-link" href="#">Categorías</a>
            <a className="nav-link disabled">Ayuda</a>
        </div>
        </div>
    </div>
    </nav>
  )
}

export default Navbar