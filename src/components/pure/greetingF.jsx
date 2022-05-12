import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Greetingf = (props) => {

    // Breve introducción a useState
    // const [variable, metodo para actualizarlo] = useState(valor inicial)
    const [age, setAge] = useState(29)

    const birthday = () => {
        // actualizamos el state
        setAge(age + 1)
    }

    return (
        <div>
             <h1>
                    ¡HOLA { props.name } desde componente función !
                </h1>
                <h2>
                    TU EDAD ES DE: { age }
                </h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir Años
                    </button>
                </div>
        </div>
    );
};


Greetingf.propTypes = {
    name: PropTypes.string,

};


export default Greetingf;
