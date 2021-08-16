import React from 'react';
import './Otrasweb.css';

function Otrasweb() {
    return (
        <div className='webscontainer'>
            <div>
                <h4>Esta página web ayuda a mis clientes a calcular el precio de mis servicios como Booster</h4>
                <iframe height='500' width='360' src='https://jodsab.github.io/using-sass/'></iframe>
                <p>Visitar Sitio:</p>
                <a href='https://jodsab.github.io/using-sass/' target='_blank'><button>Jodsab Boosting MMR</button></a>
            </div>
            <div>
                <h4>Este es mi primer perfil de presentación que creé usando  HTML, CSS y Java Script</h4>
                <iframe height='500' width='360' src='https://jodsab.github.io/cvcamilo/'></iframe>
                <p>Visitar Sitio:</p>
                <a href='https://jodsab.github.io/cvcamilo/' target='_blank'><button>Mi primer perfil</button></a>
            </div>
            <div>
                <h4>Red de Dota Pro Players Peruanos</h4>
                <iframe title="red de pro players peruanos" height='500' width='360' src='https://jodsab.github.io/peru-pro-players/'></iframe>
                <p>Visitar Sitio:</p>
                <a href='https://jodsab.github.io/peru-pro-players/' target='_blank' rel="noopener noreferrer"><button>Pro-Players</button></a>
            </div>
        </div>
    )
}

export default Otrasweb
