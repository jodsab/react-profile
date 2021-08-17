import React from 'react';
import './Redessociales.css';

function Redessociales() {
    return (
        <div className='redescontainer'>
            <div>
                <h4>Redes Sociales</h4>
            </div>
            <div>
                <img src={require('../img/images/facebook.png').default} alt='facebookpng'/>
                <p>Facebook: </p> 
                <a href='https://www.facebook.com/jsb.camilo/' target='_blank' rel="noopener noreferrer">Jodsab Camilo</a>
            </div>
            <div>
                <img src={require('../img/images/instagram.png').default} alt='instagrampng'/>
                <p>Instagram: </p> 
                <a href='https://www.instagram.com/jodsab.d2/' target='_blank' rel="noopener noreferrer">@jodsab.d2</a>
            </div>
            <div>
                <img src={require('../img/images/linkedin.png').default} alt='linkedinpng'/>
                <p>Linked In: </p> 
                <a href='https://www.linkedin.com/in/tito-camilo-bohorquez-quito-1497709b/' target='_blank' rel="noopener noreferrer">Tito Camilo Bohorquez Quito</a>
            </div>
            <div>
                <img src={require('../img/images/github.png').default} alt='githubpng'/>
                <p>Git Hub: </p> 
                <a href='https://github.com/jodsab' target='_blank' rel="noopener noreferrer">Jodsab</a>
            </div>
        </div>
    )
}

export default Redessociales
