import React from 'react'

//De forma provisional estoy forzando el tamaño de la imagen desde acá, pretendo modificarle el tamaño con software para que no haya que hacer reescalado, por una cuestión de tiempo lo dejé así. La cantidad decidí meterla por props porque así si armo un carrito de compras en un array puedo usar un lenght para determinar la cantidad de articulos del carrito y meterlo por props.

const CardWidget = (props) => {
  const {cantidad} = props
  return (
    <div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <a href=''><img src="img/interfaz/CdC.png" alt="carrito de compras" width={25} height={25}></img></a>
            </div>
            <div className="col">
              {cantidad}
            </div>
          </div>
        </div>
    </div>
  )
}

export default CardWidget