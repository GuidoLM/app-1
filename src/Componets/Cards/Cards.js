import React from 'react'




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

        <a id='comprar{sku}' className="btn btn-primary fondoBoton">Comprar</a>

        <button
          type="button"
          className="btn btn-primary fondoBoton"
          data-bs-toggle="modal"
          data-bs-target="#{sku}"
        >
          Agregar al carrito
        </button>
        </div>
    </div>
  )
}

export default Cards