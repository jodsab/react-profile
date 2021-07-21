import React from 'react'
import './Formcontact.css';

function Formcontact() {
    return (
        <div className='cont_formulario'>
            <h4>CONTACTO</h4>
            <form className='formulario'>
                <label for='name'>Nombre: </label>    
                <input type='text' name='name'></input>
                
                <label for='email'>Email: </label>
                <input type='email' name='email'></input>
                
                <textarea id='textarea' rows="14" cols='30'></textarea>
                
                <button type='submit'>Enviar Mensaje</button>
            </form>
        </div>
    )
}

export default Formcontact
