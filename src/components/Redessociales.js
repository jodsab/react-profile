import React from 'react';
import './Redessociales.css';

function Redessociales() {
    return (
        <div className='redescontainer'>
            <div>
                <h4>Redes Sociales</h4>
            </div>
            <div>
                <img src={require('../img/images/facebook.png').default} />
                <p>Facebook: </p> 
                <a href='https://www.facebook.com/jsb.camilo/' target='_blank'>Jodsab Camilo</a>
            </div>
            <div>
                <img src={require('../img/images/instagram.png').default} />
                <p>Instagram: </p> 
                <a href='https://www.instagram.com/jodsab.d2/' target='_blank'>@jodsab.d2</a>
            </div>
            <div>
                <img src={require('../img/images/linkedin.png').default} />
                <p>Linked In: </p> 
                <a href='https://www.linkedin.com/in/tito-camilo-bohorquez-quito-1497709b/' target='_blank'>Tito Camilo Bohorquez Quito</a>
            </div>
            <div>
                <img src={require('../img/images/github.png').default} />
                <p>Git Hub: </p> 
                <a href='https://github.com/jodsab' target='_blank'>Jodsab</a>
            </div>
        </div>
    )
}

export default Redessociales
