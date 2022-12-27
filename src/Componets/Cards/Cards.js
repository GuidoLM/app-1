import React from 'react'
import { Link, NavLink } from 'react-router-dom';




const Cards = (props) => {
    const {sku,articulo,precio,img,marca} = props;

  return (
    <div className="card a2">
    <img
      src={img}
      className="card-img-top"
      alt={articulo}
    />
      <div className="card-body">
        <h4 className="card-title">{articulo}</h4>
        <h5>{precio}</h5>
        <NavLink className="btn btn-primary fondoBoton" to={'/marca/'+{sku}}>Comprar</NavLink>

        </div>
    </div>
  )
}

export default Cards