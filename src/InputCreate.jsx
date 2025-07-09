import { useState } from 'react'

const InputCreate = () => {
    const [ title, setTitle ] = useState('')
    const urlApiCreate = 'http://localhost:3000/create'

    const handleSubmit = async (e) => {
        e.preventDefault();

    if(!title.trim()) return;
    
    try{
        const respuesta = await fetch(urlApiCreate, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({title}),
        })

    if (respuesta.ok) {
        setTitle(''); 
        alert('Tarea creada con éxito');
    } else {
        alert('Error al crear tarea');
      }  

    } catch (error) {
        console.error(error);
    }
    };

 return (
    <form onSubmit={handleSubmit}>
        <input 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Escribe aqui la tarea'
        />
        <button type='submit'>Crear tarea</button>
    </form>
    )
}

export default InputCreate

/* codigo DATA
import {useState} from 'react'

function InputCreate() {
  const [title, setTitle] = useState("")
  const [res, setRes] = useState('Listo para enviar')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const urlApiCreate = import.meta.env.VITE_APP_API_URL_CREATE
    const payload = { title }
    
    try {
      const response = await fetch(urlApiCreate, {
        method: 'POST', // Método HTTP
        headers: {
          'Content-Type': 'application/json', // Indicamos que el contenido es JSON
        },
        body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
      })
      if(response.ok) {
        const data = await response.json()
        setRes(`enviado: ${data.title}`)
        setTitle('') //limpia el input
      } else {
        throw new Error("Ups, se ha roto");
      }

    } catch (err) {
      console.error(err)
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="escribe una tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <h2>{res}</h2>
    </>
  );
}

export default InputCreate;
*/