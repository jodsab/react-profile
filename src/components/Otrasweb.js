import React from 'react';
import './Otrasweb.css';
import players from './Proyectos.json';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Otrasweb() {

    const arrPlayers = [];
    players.map((e) => arrPlayers.push(e));
    

    return (
        <div className='webscontainer'>
                {
                    arrPlayers.map((e) => <div className='title_text_container'>
                        <div className='proyect_text'>
                            <h4>{e.name}</h4>
                            <i>{e.status}</i>
                            <p> {e.description} </p>
                        </div>
                        <iframe src={e.link} width='350' height='500' title={e.name} ></iframe>
                        <a href={e.link} target="_blank" rel="noreferrer"> <FaExternalLinkAlt /><button>{e.name}</button></a>
                        </div>)
                }
        </div>
    )
}

export default Otrasweb
