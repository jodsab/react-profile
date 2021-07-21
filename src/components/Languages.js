import React, { useState } from 'react';
import langs from './Lenguajes.json';
import './Languages.css';
import Niveles from './Niveles';

class Languages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nivel: 0,
        }
    }

    render() {
        const link = './images';

        return (
            <>
                <h4>Conocimientos</h4>
                {/* <div className='buttons'>
                    <button onClick={() => this.setState({ nivel: 1 })}>BASICO</button>
                    <button onClick={() => this.setState({ nivel: 2 })}>INTERMEDIO</button>
                    <button onClick={() => this.setState({ nivel: 3 })}>AVANZADO</button>
                </div> */}

                <ul className='lista'>
                    {langs.map((item) => (
                        <li key={item.id} >
                            <p>{item.name}</p>
                            <img src={`${link}${item.src}`} alt={item.name} />
                        </li>
                    ))}
                </ul>
                {/* <ul>
                    {langs.map((info) => (
                        <Niveles info={info} nivel={this.state.nivel} />
                    ))}
                </ul> */}
            </>
        )
    }
}

export default Languages;