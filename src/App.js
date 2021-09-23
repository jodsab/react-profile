import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Link, Switch, Route, HashRouter } from 'react-router-dom';

import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import Conocimientos from './pages/Conocimientos';
import Contacto from './pages/Contacto';
import Error from './pages/Error';



export function App() {

  return (
    <>
      <HashRouter>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/conocimientos' component={Conocimientos} />
          <Route path='/proyectos' component={Proyectos} />
          <Route path='/contacto' component={Contacto} />
          <Route path='/' component={Error} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;