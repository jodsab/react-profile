import React from 'react';
import cursos from './Lenguajes.json';
import './Curriculum.css';


function Curriculum() {



    return (

        <div className='cv_container'>
            <div className='profile_container'>
                <div className='cont_perfil' >
                    <img src='./others/perfil.png' className='fotoperfil' alt='Foto perfil' />
                    <h3>Tito Camilo Bohorquez Quito</h3>
                    <h4>Full Stack Developer</h4>
                </div>

                <div className='cont_personal' >
                    <img src='./others/unmsm.png' alt='foto escudo universidad' />
                    <p>Estudiante universitario de tercer año en la <strong>Universidad Nacional Mayor de San Marcos</strong> en la carrera de <strong>Ingeniería de Software</strong>.</p>
                </div>
            </div>
            <div className='stack_container'>
                <div className='stackdev'>
                    <h3>STACK DE DESARROLLO</h3>
                </div>
                <div>
                    <div className='cont_cursos' >
                        <div>
                            <h5>Mongo DB</h5>
                            <img src='./images/mongodb.png' alt='foto mongo' />
                        </div>
                        <div>
                            <h5>Express</h5>
                            <img src='./images/express.png' alt='foto express' />
                        </div>
                        <div>
                            <h5>React</h5>
                            <img src='./images/react.png' alt='foto react' />
                        </div>
                        <div>
                            <h5>Node JS</h5>
                            <img src='./images/nodejs.png' alt='foto node' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Curriculum
