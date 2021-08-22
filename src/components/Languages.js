import React from 'react';
import langs from './Lenguajes.json';
import './Languages.css';

class Languages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nivel: 0,
        }
    }     

    render() {

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
                            <img src={require(`../img/images${item.src}`).default} alt={item.name} />
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default Languages;