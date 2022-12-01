import React from 'react'

//Estoy llamando a 2 propiedades "titulo" y "url" porque mi idea es que esto cambie despendiendo de la página donde este, y con ello el url, de esa forma el usuario puede usar el botón de inicio o el carrusel para ir al inicio de la página o presionar el título de la página para recargar la página. Esto igual puede cambiar, es solo una idea general que tengo ahora mismo.

const itemListContainer = (props) => {
  const {titulo, url} = props
  return (
    <a className="navbar-brand" href={url}>{titulo}</a>
  )
}

export default itemListContainer