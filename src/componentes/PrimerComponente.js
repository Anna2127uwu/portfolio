import React, {useState} from 'react';

export const PrimerComponente = () => {

  let web = "ann.com";

  const [nombre, setNombre] = useState("Ann");

  let cursos = [
    "React",
    "Angular",
    "Vue"
  ];

  const cambiarNombre = (nuevoNombre) => 
    {
      setNombre(nuevoNombre);
    }
  return (
    <div>
        <h1>Hola, aqui va todo el HTML que quieras jsjsj</h1>
        <h2>Nombre: {nombre}</h2> 
        <h3>Web: {web}</h3>

        <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder='Cambia el nombre' /> 

    <button onClick={ e => cambiarNombre("Roberto")} >
        Cambiar Nombre
    </button>

        <h4>Cursos:</h4>
        <ul>
          {cursos.map((curso, index) => (
            <li key={index}>{curso}</li>
          ))
          }
        </ul>
    </div>
  )
}