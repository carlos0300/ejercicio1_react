import React, { useState } from 'react';


const A = ({ contact }) => {

    const [state, setState] = useState(true)

    const changeState = () => {
        if(state){
            contact.conected = false
            setState(false)
        }else{
            contact.conected = true
            setState(true)
        }
    }

    return (
        <div>
            <h4>Nombre: { contact.name } </h4>
            <h4>Apellido: { contact.lastname } </h4>
            <h4>Email: { contact.email } </h4>
            <h4>Estado: { contact.conected ? 'Contacto En Línea' : 'Contacto No Disponible' } </h4>
            <button onClick={changeState}>Cambiar Estado</button>
        </div>
    );
};



export default A;
