import React from 'react'
import Main from '../Main/Main.js'


const ItemDetailContainer = () => {
  return (
    <div class="container text-center">
  <div class="row">
    <div class="col">
      <img src={img}></img>
    </div>
    <div class="col">
      <ul>
        <li>{articulos}</li>
        <li>Precio: {precio}</li>
      </ul>
    </div>
  </div>
  <div class="row">
  <div class="col">
      Column
    </div>
  </div>
</div>
  )
}

export default ItemDetailContainer