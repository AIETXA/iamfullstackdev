import { useState } from 'react'

const InputCreate = () => {
    const [ tarea, setTarea ] = useState('')
    const urlApi = 'http://localhost:3000/create'

    const handleSubmit = async (e) => {
        e.preventDefault();

    if(!tarea.trim()) return;
    
    try{
        const respuesta = await fetch(urlApi, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({tarea}),
        })

    if (respuesta.ok) {
        setTarea(''); 
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
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            placeholder='Escribe aqui la tarea'
        />
        <button type='submit'>Crear tarea</button>
    </form>
    )
}

export default InputCreate