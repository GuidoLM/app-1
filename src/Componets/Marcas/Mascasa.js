import React from 'react'

const handleSubmit =(e) =>{
  e.preventDefault();
  console.log("Se evitó recargar la página")
}

const handleChange = () => {
  /*if (this.value = "a" | "e" | "i" | "o" | "u"){
    alert("Caracter inválido")
  }*/
  console.log("Está conectada la función")
}


const Mascasa = () => {
  return (
    <div>
        <h1>+Casa</h1>
        <form onSubmit={handleSubmit} action="">
          <input onChange={handleChange} type="text"/>
          <button type="submit"> Guardar fomr</button>
        </form>
    </div>
  )
}

export default Mascasa